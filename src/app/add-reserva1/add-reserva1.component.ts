import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from '../_model/habitacion.model';
import { HabitacionService } from '../_service/habitacion.service';

@Component({
  selector: 'app-add-reserva1',
  templateUrl: './add-reserva1.component.html',
  styleUrls: ['./add-reserva1.component.css']
})
export class AddReserva1Component implements OnInit {

  habitaciones: Habitacion[];

  constructor(private router: Router, private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.habitacionService.ListarHabitacion()
      .subscribe(data => {
        this.habitaciones = data;
      });
  }

  DetalleHabitacion(habitacion: Habitacion) {
    localStorage.removeItem("DetalleHabitacionId");
    localStorage.setItem("DetalleHabitacionId", habitacion.codigo.toString());
    this.router.navigate(['add-reserva2']);
  }

}
