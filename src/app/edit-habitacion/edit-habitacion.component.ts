import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HabitacionService } from '../_service/habitacion.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-habitacion',
  templateUrl: './edit-habitacion.component.html',
  styleUrls: ['./edit-habitacion.component.css']
})
export class EditHabitacionComponent implements OnInit {

  
  ActualizarHabitacionForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl(''),
    huespedes: new FormControl(''),
    imagen: new FormControl(''),
    precio: new FormControl(0)
  });
  
  constructor(private router: Router, private habitacionService: HabitacionService) { }
  
  ngOnInit() {
    let HabitacionId = localStorage.getItem("ActualizarHabitacionId");
    if(!HabitacionId) {
      alert("Habitacion invalida");
      this.router.navigate(['list-habitacion']);
      return;
    }
    this.habitacionService.ListarHabitacionXId(+HabitacionId)
      .subscribe( data => {
        this.ActualizarHabitacionForm.setValue(data);
      });
  }

  ActualizarHabitacion() {
    this.habitacionService.ActualizarHabitacion(this.ActualizarHabitacionForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data!="Habitacion actualizada"){
            alert(data);
          }
          else{
            this.router.navigate(['list-habitacion']);
            alert(data);
          }
        });
  }

}
