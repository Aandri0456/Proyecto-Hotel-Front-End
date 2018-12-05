import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmpleadoService } from '../_service/empleado.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  
  ActualizarEmpleadoForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    dni: new FormControl(''),
    cargo: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });
  
  constructor(private router: Router, private empleadoService: EmpleadoService) { }
  
  ngOnInit() {
    let empleadoId = localStorage.getItem("ActualizarEmpleadoId");
    if(!empleadoId) {
      alert("Empleado invalido");
      this.router.navigate(['list-empleado']);
      return;
    }
    this.empleadoService.ListarEmpleadoXId(+empleadoId)
      .subscribe( data => {
        this.ActualizarEmpleadoForm.setValue(data);
      });
  }

  ActualizarEmpleado() {
    this.empleadoService.ActualizarEmpleado(this.ActualizarEmpleadoForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data!="Empleado actualizado"){
            alert(data);
          }
          else{
            this.router.navigate(['list-empleado']);
            alert(data);
          }
        });
  }
}
