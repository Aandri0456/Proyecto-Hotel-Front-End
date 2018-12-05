import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTopReservaComponent } from './reporte-top-reserva.component';

describe('ReporteTopReservaComponent', () => {
  let component: ReporteTopReservaComponent;
  let fixture: ComponentFixture<ReporteTopReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTopReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTopReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
