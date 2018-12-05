import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyReservaComponent } from './list-my-reserva.component';

describe('ListMyReservaComponent', () => {
  let component: ListMyReservaComponent;
  let fixture: ComponentFixture<ListMyReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
