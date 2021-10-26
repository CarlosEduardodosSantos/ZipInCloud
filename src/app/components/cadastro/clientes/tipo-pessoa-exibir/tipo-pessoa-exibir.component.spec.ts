import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPessoaExibirComponent } from './tipo-pessoa-exibir.component';

describe('TipoPessoaExibirComponent', () => {
  let component: TipoPessoaExibirComponent;
  let fixture: ComponentFixture<TipoPessoaExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPessoaExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPessoaExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
