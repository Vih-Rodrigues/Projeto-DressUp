from flask import Flask, flash, request, jsonify, send_file
from flask import session, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import zipfile
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://Patricia:Dressup2023@dressup2023.postgres.database.azure.com/dressup?sslmode=require"
db = SQLAlchemy(app)
CORS(app)

CORS(app, origins = "http://localhost:4200")

class Usuario(db.Model):
    __tablename__ = 'tb_usuario'
    
    cod_usuario = db.Column(db.Integer, primary_key = True)
    nome = db.Column(db.String(60), nullable = False)
    email = db.Column(db.String(40), nullable = False, unique = True)
    senha = db.Column(db.String(20), nullable = False)

class Categorias(db.Model):
    __tablename__ = 'tb_categorias'
    
    cod_categoria = db.Column(db.Integer, primary_key = True)
    categoria = db.Column(db.String(10), nullable = False)
    descricao = db.Column(db.String(10), nullable = False )

class Peca(db.Model):
    __tablename__ = 'tb_peca'

    cod_peca = db.Column(db.Integer, primary_key = True)
    cod_usuario = db.Column(db.Integer, db.ForeignKey('tb_usuario.cod_usuario'))
    referencia_tabela_usuario = db.relationship('Usuario', backref = db.backref('Peca', lazy = True))
    
class Imagem(db.Model):
    __tablename__ = 'tb_imagem'
    
    cod_imagem = db.Column(db.Integer, primary_key = True)
    cod_peca = db.Column(db.Integer, db.ForeignKey('tb_peca.cod_peca'))
    referencia_tabela_peca = db.relationship('Peca', backref = db.backref('Imagem', lazy = True))
    imagem = db.Column(db.LargeBinary)

class Look(db.Model):
    __tablename__ = 'tb_look'
    
    cod_look = db.Column(db.Integer, primary_key = True)
    pecas = db.Column(db.String, nullable = False)
    
class Aux_Look(db.Model):
    __tablename__ = 'tb_aux_look'
    
    cod_aux_look = db.Column(db.Integer, primary_key = True)
    cod_look = db.Column(db.Integer, db.ForeignKey('tb_look.cod_look'))
    referencia_tabela_look = db.relationship('Look', backref = db.backref('Aux_Look', lazy = True))
    peca = db.Column(db.Integer, nullable = False)

class Conselhos(db.Model):
    __tablename__ = 'tb_conselhos'

    cod_conselho = db.Column(db.Integer, primary_key=True)
    conselho = db.Column(db.String)

@app.route('/cadastrar',methods = ['POST'])
def cadastro_novo():
    data = request.get_json()
    novo_usuario = Usuario(
        nome = data['nome'],
        email = data['email'],
        senha = data['senha']
    )
    db.session.add(novo_usuario)
    
    try:
        db.session.commit()
        return jsonify({
            'message' : f'{novo_usuario.nome} cadastrado com sucesso.'}), 201
        
    except Exception as error:
        print(error)
        return jsonify({'message': 'Cadastro não realizado.Verifique os dados.'}), 400
    
@app.route('/exportar_usuario', methods = ['GET'])
def exportar_usuario():
    usuario = Usuario.query.all()
    teste = []
    for i in usuario:
        testes = {
            'nome': i.nome
        }        
        teste.append(testes)
    
    jsonfilename = 'arquivoexportado.json'
    with open(jsonfilename, 'w') as jsonfile: 
        json.dump(teste, jsonfile)
        
    zip_filename = 'arquivoexportado.zip'
    table_name = Usuario.__tablename__
    export_folder = os.path.join(app.root_path, 'export')
    zip_path = os.path.join(export_folder, zip_filename)
    
    with zipfile.ZipFile(zip_path, 'w') as zipado:
        zipado.write(jsonfilename, f'{table_name}.json')
    
    os.remove(jsonfilename)
    
    return send_file(zip_path, mimetype = 'application/zip', as_attachment = True, attachment_filename = zip_filename)

@app.route('/conselho-do-dia', methods=['GET'])
def get_dica():
    url = 'https://api.adviceslip.com/advice'
    response = requests.get(url)
    data = response.json()
    advice = data['slip']['advice']
    conselho = Conselhos(conselho=advice)
    db.session.add(conselho)
    db.session.commit()
    return jsonify(message='Conselho ouvido com sucesso!')

@app.route('/conselhos', methods=['POST'])
def insert_advice():
    advice = request.json['advice']
    novo_conselho = Conselhos(conselho=advice)
    db.session.add(novo_conselho)
    db.session.commit()
    return jsonify(message='Conselho guardado')

@app.route('/conselhos', methods=['GET'])
def get_conselho():
    conselhos = Conselhos.query.all()
    dicas = [{'cod_conselho': conselho.cod_conselho, 'conselho': conselho.conselho} for conselho in conselhos]
    return jsonify(dicas)

@app.route('/exportar_conselhos', methods=['GET'])
def exportar_conselhos():
    conselhos = Conselhos.query.all()
    list_conselho = []
    for i in conselhos:
        list_conselhos = {
            'conselho': i.conselho
        }        
        list_conselho.append(list_conselhos)
    
    jsonfilename = 'listaconselhos.json'
    with open(jsonfilename, 'w') as jsonfile: 
        json.dump(list_conselho, jsonfile)
    
    zip_filename = 'conselhos.zip'
    json_path = os.path.join(os.getcwd(), jsonfilename)
    
    with zipfile.ZipFile(zip_filename, 'w') as zip_file:
        zip_file.write(json_path, os.path.basename(json_path))
    
    os.remove(jsonfilename)
    
    response = make_response(send_file(zip_filename, mimetype='application/zip'))
    response.headers['Content-Disposition'] = 'attachment; filename=conselhos.zip'
    
    return response

@app.route('/login', methods=['POST'])
def validaLogin():
    data = request.get_json()
    email = data['email']
    senha = data['senha']

    print(email)
    print(senha)

    usuario = Usuario.query.filter_by(email=email, senha=senha).first()
    print(usuario)

    if usuario:
        return jsonify({'message': 'Login autorizado.'}), 200

    return jsonify({'message': 'Usuário não encontrado, tente novamente.'}), 401
    
if __name__ == '__main__':
    with app.app_context():
        db.create_all()    
    app.run(debug=True)