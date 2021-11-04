import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoCriarComponent } from './endereco-criar.component';

describe('EnderecoCriarComponent', () => {
  let component: EnderecoCriarComponent;
  let fixture: ComponentFixture<EnderecoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
