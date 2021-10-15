import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprodutoModificarComponent } from './tipoproduto-modificar.component';

describe('TipoprodutoModificarComponent', () => {
  let component: TipoprodutoModificarComponent;
  let fixture: ComponentFixture<TipoprodutoModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoprodutoModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoprodutoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
