import { Component } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import { UsuarioService } from '../_service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  LoginForm = new FormGroup({
    correo: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor( private router: Router, private usuarioService: UsuarioService) { }



  Login() {
    
      this.usuarioService.Login(this.LoginForm.value)
        .subscribe(data => {
          if(data==null){
            alert("Usuario y/o contraseña invalido");
            
          }
          else{
            this.usuarioService.setUsuarioLogueado(data);
            this.router.navigate(['add-reserva1']);
          }
          
        });
    

  
  }



}