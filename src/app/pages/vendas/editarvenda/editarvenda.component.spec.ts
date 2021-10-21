import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvendaComponent } from './editarvenda.component';

describe('EditarvendaComponent', () => {
  let component: EditarvendaComponent;
  let fixture: ComponentFixture<EditarvendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarvendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
