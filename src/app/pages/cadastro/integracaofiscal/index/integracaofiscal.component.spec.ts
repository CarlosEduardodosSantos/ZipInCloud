import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracaofiscalComponent } from './integracaofiscal.component';

describe('IntegracaofiscalComponent', () => {
  let component: IntegracaofiscalComponent;
  let fixture: ComponentFixture<IntegracaofiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracaofiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracaofiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
