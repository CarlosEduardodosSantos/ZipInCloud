import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasCriarComponent } from './marcas-criar.component';

describe('MarcasCriarComponent', () => {
  let component: MarcasCriarComponent;
  let fixture: ComponentFixture<MarcasCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
