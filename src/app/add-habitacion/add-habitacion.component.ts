import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitacionService } from '../_service/habitacion.service';

@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add-habitacion.component.html',
  styleUrls: ['./add-habitacion.component.css']
})
export class AddHabitacionComponent {

  constructor(private router: Router, private habitacionService: HabitacionService) { }


  AgregarHabitacionForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl(''),
    huespedes: new FormControl(''),
    imagen: new FormControl(''),
    precio: new FormControl(0)
  });
  

  AgregarHabitacion() {
    this.habitacionService.AgregarHabitacion(this.AgregarHabitacionForm.value)
      .subscribe( data => {
        if(data!="Habitacion agregada"){
          alert(data);
        }
        else{
          this.router.navigate(['list-habitacion']);
          alert(data);
        }
        
      });
  }

}
