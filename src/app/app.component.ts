import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuarioService } from './_service/usuario.service';
import { Usuario } from './_model/usuario.model';
import { EmpleadoService } from './_service/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  isNavbarCollapsed = true;
  usuarioLogueado = null;
  empleadoLogueado = null;

  title = 'Proyecto';

  constructor(private router: Router, private toastr: ToastrService, private usuarioSevice: UsuarioService,private empleadoSevice: EmpleadoService) { }

  ngOnInit(): void {
    this.UsuarioLogueado();
    this.EmpleadoLogueado();
    
  }



  UsuarioLogueado(): boolean {
    this.usuarioLogueado = this.usuarioSevice.getUsuarioLogueado();
    if (this.usuarioLogueado == null) {
      return false
    }
    else {
      return true
    }
  }

  EmpleadoLogueado(): boolean {
    this.empleadoLogueado = this.empleadoSevice.getEmpleadoLogueado();
    if (this.empleadoLogueado == null) {
      return false
    }
    else {
      return true
    }
  }

  Logueado():boolean{
    if (this.UsuarioLogueado()||this.EmpleadoLogueado()) {
      return true
    }
    else {
      return false
    }
  }

  Logout() {

    this.usuarioSevice.setUsuarioLogueado(null);

    this.empleadoSevice.setEmpleadoLogueado(null);

    this.UsuarioLogueado();
    this.EmpleadoLogueado();
    this.router.navigate(['login']);


  }
}
