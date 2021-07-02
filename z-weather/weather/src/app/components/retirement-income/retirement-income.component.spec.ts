import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementIncomeComponent } from './retirement-income.component';

describe('RetirementIncomeComponent', () => {
  let component: RetirementIncomeComponent;
  let fixture: ComponentFixture<RetirementIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
