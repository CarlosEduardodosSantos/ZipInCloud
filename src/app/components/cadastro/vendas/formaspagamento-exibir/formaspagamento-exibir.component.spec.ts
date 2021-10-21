import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaspagamentoExibirComponent } from './formaspagamento-exibir.component';

describe('FormaspagamentoExibirComponent', () => {
  let component: FormaspagamentoExibirComponent;
  let fixture: ComponentFixture<FormaspagamentoExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaspagamentoExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaspagamentoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
