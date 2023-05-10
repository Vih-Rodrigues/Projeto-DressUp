import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePoUiComponent } from './template-po-ui.component';

describe('TemplatePoUiComponent', () => {
  let component: TemplatePoUiComponent;
  let fixture: ComponentFixture<TemplatePoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePoUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
