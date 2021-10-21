import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesExibirComponent } from './clientes-exibir.component';

describe('ClientesExibirComponent', () => {
  let component: ClientesExibirComponent;
  let fixture: ComponentFixture<ClientesExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
