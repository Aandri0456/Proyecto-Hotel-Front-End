import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../_service/empleado.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {

  constructor(private router: Router, private empleadoService: EmpleadoService) { }


  AgregarEmpleadoForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    dni: new FormControl(''),
    cargo: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });
  

  AgregarEmpleado() {
    this.empleadoService.AgregarEmpleado(this.AgregarEmpleadoForm.value)
      .subscribe( data => {
        if(data!="Empleado agregado"){
          alert(data);
        }
        else{
          this.router.navigate(['list-empleado']);
          alert(data);
        }
        
      });
  }

}
