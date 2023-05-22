import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLookComponent } from './add-look.component';

describe('AddLookComponent', () => {
  let component: AddLookComponent;
  let fixture: ComponentFixture<AddLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
