import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../_model/habitacion.model';
import { Router } from '@angular/router';
import { HabitacionService } from '../_service/habitacion.service';
import { ReservaService } from '../_service/reserva.service';

@Component({
  selector: 'app-reporte-top-reserva',
  templateUrl: './reporte-top-reserva.component.html',
  styleUrls: ['./reporte-top-reserva.component.css']
})
export class ReporteTopReservaComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor(private router: Router, private habitacionService: HabitacionService,private reservaService:ReservaService) { }

  ngOnInit() {
    this.reservaService.ListarTopReserva()
      .subscribe(data => {
        this.habitaciones = data;
      });
  }

}
