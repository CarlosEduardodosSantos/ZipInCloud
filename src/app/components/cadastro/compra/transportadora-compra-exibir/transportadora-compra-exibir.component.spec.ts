import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraCompraExibirComponent } from './transportadora-compra-exibir.component';

describe('TransportadoraCompraExibirComponent', () => {
  let component: TransportadoraCompraExibirComponent;
  let fixture: ComponentFixture<TransportadoraCompraExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportadoraCompraExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraCompraExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
