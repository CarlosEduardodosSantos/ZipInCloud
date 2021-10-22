import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimetributarioExibirComponent } from './regimetributario-exibir.component';

describe('RegimetributarioExibirComponent', () => {
  let component: RegimetributarioExibirComponent;
  let fixture: ComponentFixture<RegimetributarioExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimetributarioExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimetributarioExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
