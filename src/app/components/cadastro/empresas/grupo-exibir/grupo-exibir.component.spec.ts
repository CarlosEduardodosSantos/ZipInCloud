import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoExibirComponent } from './grupo-exibir.component';

describe('GrupoExibirComponent', () => {
  let component: GrupoExibirComponent;
  let fixture: ComponentFixture<GrupoExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
