import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresExibirComponent } from './vendedores-exibir.component';

describe('VendedoresExibirComponent', () => {
  let component: VendedoresExibirComponent;
  let fixture: ComponentFixture<VendedoresExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoresExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoresExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
