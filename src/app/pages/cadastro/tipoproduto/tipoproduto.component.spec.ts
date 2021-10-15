import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprodutoComponent } from './tipoproduto.component';

describe('TipoprodutoComponent', () => {
  let component: TipoprodutoComponent;
  let fixture: ComponentFixture<TipoprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
