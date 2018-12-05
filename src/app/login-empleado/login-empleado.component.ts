import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../_service/empleado.service';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent {

 
  LoginForm = new FormGroup({
    nombre: new FormControl(''),
    dni: new FormControl('')
  });
  
  constructor( private router: Router, private empleadoService: EmpleadoService) { }



  Login() {
    
      this.empleadoService.Login(this.LoginForm.value)
        .subscribe(data => {
          if(data==null){
            alert("Usuario y/o contraseña invalido");
            
          }
          else{
            this.empleadoService.setEmpleadoLogueado(data);
            this.router.navigate(['list-habitacion']);
          }
          
        });
    

  
  }

}
