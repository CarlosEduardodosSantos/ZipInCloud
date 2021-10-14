import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasModificarComponent } from './categorias-modificar.component';

describe('CategoriasModificarComponent', () => {
  let component: CategoriasModificarComponent;
  let fixture: ComponentFixture<CategoriasModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
