import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorExibirComponent } from './fornecedor-exibir.component';

describe('FornecedorExibirComponent', () => {
  let component: FornecedorExibirComponent;
  let fixture: ComponentFixture<FornecedorExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
