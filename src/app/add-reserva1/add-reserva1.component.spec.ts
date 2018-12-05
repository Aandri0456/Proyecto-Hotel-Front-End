import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReserva1Component } from './add-reserva1.component';

describe('AddReserva1Component', () => {
  let component: AddReserva1Component;
  let fixture: ComponentFixture<AddReserva1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReserva1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReserva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
