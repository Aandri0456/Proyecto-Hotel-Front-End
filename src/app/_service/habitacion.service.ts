import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../_model/habitacion.model';

@Injectable()
export class HabitacionService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:58190/api/habitacion/';


  ListarHabitacion() {
    return this.http.get<Habitacion[]>(this.baseUrl+'ListarHabitacion');
  }

  AgregarHabitacion(habitacion:Habitacion):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarHabitacion',habitacion);
  }

  ActualizarHabitacion(habitacion:Habitacion):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarHabitacion',habitacion);
  }
  
  EliminarHabitacion(id):Observable<string>{
    return this.http.delete<string>(this.baseUrl+'EliminarHabitacion/'+id);
  }


  
  ListarHabitacionXId(id) {
    return this.http.get<Habitacion>(this.baseUrl+'ListarHabitacionXId/'+id);
  }

  CheckIn(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'CheckIn/'+id,null);
  }
  
  CheckOut(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'CheckOut/'+id,null);
  }
}
