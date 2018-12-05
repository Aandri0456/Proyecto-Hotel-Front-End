import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../_model/empleado.model';

@Injectable()
export class EmpleadoService {

  private EstaLogueado;
  public EmpleadoLogueado:Empleado;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:58190/api/empleado/';

  ListarEmpleadoXDni(dni) {
    return this.http.get<Empleado[]>(this.baseUrl+'ListarEmpleadoXDni?dni='+dni);
  }

  ListarEmpleadoXId(id) {
    return this.http.get<Empleado>(this.baseUrl+'ListarEmpleadoXId/'+id);
  }

  AgregarEmpleado(empleado:Empleado):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarEmpleado',empleado);
  }

  ActualizarEmpleado(empleado:Empleado):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarEmpleado',empleado);
  }
  
  EliminarEmpleado(id):Observable<string>{
    return this.http.delete<string>(this.baseUrl+'EliminarEmpleado/'+id);
  }

  Login(empleado) {
    return this.http.post<Empleado>(this.baseUrl+'login',empleado);
  }

  setEmpleadoLogueado(empleado:Empleado) {
    this.EstaLogueado = true;
    this.EmpleadoLogueado = empleado;
    localStorage.removeItem('EmpleadoActual');
    localStorage.setItem('EmpleadoActual', JSON.stringify(empleado));
    localStorage.removeItem('UsuarioActual');
  }

  getEmpleadoLogueado() {
  	return JSON.parse(localStorage.getItem('EmpleadoActual'));
  }
}
