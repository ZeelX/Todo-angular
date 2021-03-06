import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm } from './formulaireacceuil.component';

describe('FormulaireacceuilComponent', () => {
  let component: TodoForm;
  let fixture: ComponentFixture<TodoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
