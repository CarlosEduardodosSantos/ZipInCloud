import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorCompraExibirComponent } from './comprador-compra-exibir.component';

describe('CompradorCompraExibirComponent', () => {
  let component: CompradorCompraExibirComponent;
  let fixture: ComponentFixture<CompradorCompraExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorCompraExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorCompraExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
