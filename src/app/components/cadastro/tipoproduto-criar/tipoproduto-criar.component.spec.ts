import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoprodutoCriarComponent } from './tipoproduto-criar.component';

describe('TipoprodutoCriarComponent', () => {
  let component: TipoprodutoCriarComponent;
  let fixture: ComponentFixture<TipoprodutoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoprodutoCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoprodutoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
