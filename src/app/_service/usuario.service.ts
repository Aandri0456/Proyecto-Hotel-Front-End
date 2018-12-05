import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../_model/usuario.model';

@Injectable()
export class UsuarioService {

  private EstaLogueado;
  public UsuarioLogueado:Usuario;

  constructor(private http: HttpClient) {
    this.EstaLogueado=false;
   }
  baseUrl: string = 'http://localhost:58190/api/usuario/';


  AgregarUsuario(usuario:Usuario):Observable<string>{
    return this.http.post<string>(this.baseUrl+'agregarusuario',usuario);
  }

  
  Login(usuario) {
    return this.http.post<Usuario>(this.baseUrl+'login',usuario);
  }

  setUsuarioLogueado(usuario:Usuario) {
    this.EstaLogueado = true;
    this.UsuarioLogueado = usuario;
    localStorage.removeItem('UsuarioActual');
    localStorage.setItem('UsuarioActual', JSON.stringify(usuario));
    localStorage.removeItem('EmpleadoActual');
  
  }

  getUsuarioLogueado() {
  	return JSON.parse(localStorage.getItem('UsuarioActual'));
  }
}
