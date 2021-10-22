import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioExibirComponent } from './municipio-exibir.component';

describe('MunicipioExibirComponent', () => {
  let component: MunicipioExibirComponent;
  let fixture: ComponentFixture<MunicipioExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipioExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
