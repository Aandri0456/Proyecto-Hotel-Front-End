import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarjetaResponse } from '../_model/tarjeta.model';
import { Reserva } from '../_model/reserva.model';
import { Habitacion } from '../_model/habitacion.model';

@Injectable()
export class ReservaService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:58190/api/reserva/';


  AgregarReserva(reserva: Reserva): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'AgregarReserva', reserva);
  }

  ValidarFechas(reserva: Reserva): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'ValidarFechas', reserva);
  }

  ListarReservaXUsuario(usuario) {
    return this.http.get<Reserva[]>(this.baseUrl+'/ListarReservaXUsuario?usuario='+usuario);
  }


  ListarReservaxestado(estado) {
    return this.http.get<Reserva[]>(this.baseUrl+'/ListarReservaxestado?estado='+estado);
  }


  CancelarReserva(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'CancelarReserva/'+id,null);
  }


  PagarReserva(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'PagarReserva/'+id,null);
  }

  
  ValidarPago(tarjeta):Observable<TarjetaResponse>{
    return this.http.post<TarjetaResponse>(this.baseUrl+'ValidarPago',tarjeta);
  }

  ListarTopReserva() {
    return this.http.get<Habitacion[]>(this.baseUrl+'/ListarTopReserva');
  }
  
  
}
