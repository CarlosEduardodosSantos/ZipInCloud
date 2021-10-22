import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoExibirComponent } from './estado-exibir.component';

describe('EstadoExibirComponent', () => {
  let component: EstadoExibirComponent;
  let fixture: ComponentFixture<EstadoExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
