import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasModificarComponent } from './marcas-modificar.component';

describe('MarcasModificarComponent', () => {
  let component: MarcasModificarComponent;
  let fixture: ComponentFixture<MarcasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
