import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabitacionComponent } from './list-habitacion.component';

describe('ListHabitacionComponent', () => {
  let component: ListHabitacionComponent;
  let fixture: ComponentFixture<ListHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
