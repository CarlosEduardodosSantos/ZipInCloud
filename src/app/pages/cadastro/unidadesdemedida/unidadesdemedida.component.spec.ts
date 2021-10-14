import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesdemedidaComponent } from './unidadesdemedida.component';

describe('UnidadesdemedidaComponent', () => {
  let component: UnidadesdemedidaComponent;
  let fixture: ComponentFixture<UnidadesdemedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesdemedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesdemedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
