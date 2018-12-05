import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../_service/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {

  constructor(private router: Router, private usuarioService: UsuarioService) { }
  
  AgregarUsuarioForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    password: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl('')
  });
  

 

  AgregarUsuario() {
    this.usuarioService.AgregarUsuario(this.AgregarUsuarioForm.value)
      .subscribe( data => {
        if(data!="Usuario agregado"){
          
          alert(data);
        }
        else{
          this.router.navigate(['login']);
          alert(data);
        }
        
      });
  }

}
