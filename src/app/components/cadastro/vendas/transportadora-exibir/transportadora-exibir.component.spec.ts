import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraExibirComponent } from './transportadora-exibir.component';

describe('TransportadoraExibirComponent', () => {
  let component: TransportadoraExibirComponent;
  let fixture: ComponentFixture<TransportadoraExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportadoraExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
