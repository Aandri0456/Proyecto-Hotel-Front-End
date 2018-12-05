import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../_model/habitacion.model';
import { Router } from '@angular/router';
import { HabitacionService } from '../_service/habitacion.service';

@Component({
  selector: 'app-list-habitacion',
  templateUrl: './list-habitacion.component.html',
  styleUrls: ['./list-habitacion.component.css']
})
export class ListHabitacionComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor(private router: Router, private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.habitacionService.ListarHabitacion()
      .subscribe(data => {
        this.habitaciones = data;
      });
  }

  AgregarHabitacion() {
    this.router.navigate(['add-habitacion']);
  }

  ActualizarHabitacion(habitacion: Habitacion) {
    localStorage.removeItem("ActualizarHabitacionId");
    localStorage.setItem("ActualizarHabitacionId", habitacion.codigo.toString());
    this.router.navigate(['edit-habitacion']);
  }

  EliminarHabitacion(habitacion) {
    this.habitacionService.EliminarHabitacion(habitacion.codigo)
      .subscribe(data => {
        alert(data)
        this.habitacionService.ListarHabitacion()
          .subscribe(data1 => {
            this.habitaciones = data1;
          });
      });
  }

}
