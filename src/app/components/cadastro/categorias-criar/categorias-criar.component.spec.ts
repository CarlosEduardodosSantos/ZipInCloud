import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCriarComponent } from './categorias-criar.component';

describe('CategoriasCriarComponent', () => {
  let component: CategoriasCriarComponent;
  let fixture: ComponentFixture<CategoriasCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
