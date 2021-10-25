import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorapidoComponent } from './acessorapido.component';

describe('AcessorapidoComponent', () => {
  let component: AcessorapidoComponent;
  let fixture: ComponentFixture<AcessorapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessorapidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessorapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
