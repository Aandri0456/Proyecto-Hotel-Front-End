import { Component, OnInit } from '@angular/core';
import { Empleado } from '../_model/empleado.model';
import { Router } from '@angular/router';
import { EmpleadoService } from '../_service/empleado.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  empleados: Empleado[];
  DniIngresado = new FormControl('');
  dni = null;

  constructor(private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleadoService.ListarEmpleadoXDni('')
      .subscribe(data => {
        this.empleados = data;
      });
  }

  AgregarEmpleado() {
    this.router.navigate(['add-empleado']);
  }

  ActualizarEmpleado(empleado: Empleado) {
    localStorage.removeItem("ActualizarEmpleadoId");
    localStorage.setItem("ActualizarEmpleadoId", empleado.codigo.toString());
    this.router.navigate(['edit-empleado']);
  }

  EliminarEmpleado(empleado) {
    this.empleadoService.EliminarEmpleado(empleado.codigo)
      .subscribe(data => {
        alert(data)
        this.empleadoService.ListarEmpleadoXDni('')
          .subscribe(data1 => {
            this.empleados = data1;
          });
      });
  }

  ListarEmpleado(){
    this.empleadoService.ListarEmpleadoXDni(this.DniIngresado.value.toString())
      .subscribe(data => {
        this.empleados = data;
      });
  }

}
