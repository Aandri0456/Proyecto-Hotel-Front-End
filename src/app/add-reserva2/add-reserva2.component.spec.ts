import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReserva2Component } from './add-reserva2.component';

describe('AddReserva2Component', () => {
  let component: AddReserva2Component;
  let fixture: ComponentFixture<AddReserva2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReserva2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReserva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
