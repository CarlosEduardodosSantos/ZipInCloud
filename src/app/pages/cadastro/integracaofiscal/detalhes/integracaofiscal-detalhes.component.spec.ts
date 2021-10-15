import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracaofiscalDetalhesComponent } from './integracaofiscal-detalhes.component';

describe('IntegracaofiscalDetalhesComponent', () => {
  let component: IntegracaofiscalDetalhesComponent;
  let fixture: ComponentFixture<IntegracaofiscalDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracaofiscalDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracaofiscalDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
