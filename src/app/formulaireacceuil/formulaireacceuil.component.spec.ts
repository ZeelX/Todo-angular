import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireacceuilComponent } from './formulaireacceuil.component';

describe('FormulaireacceuilComponent', () => {
  let component: FormulaireacceuilComponent;
  let fixture: ComponentFixture<FormulaireacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireacceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
