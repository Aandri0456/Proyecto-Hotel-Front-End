import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from '../_service/habitacion.service';
import { Habitacion } from '../_model/habitacion.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ReservaService } from '../_service/reserva.service';
import { UsuarioService } from '../_service/usuario.service';
import { Usuario } from '../_model/usuario.model';
import { Reserva } from '../_model/reserva.model';

@Component({
  selector: 'app-add-reserva2',
  templateUrl: './add-reserva2.component.html',
  styleUrls: ['./add-reserva2.component.css']
})
export class AddReserva2Component implements OnInit {

  constructor(private router: Router, private habitacionService: HabitacionService, private reservaService: ReservaService,private usuarioService: UsuarioService) { }

  habitacion  = new Habitacion;
  usuario : Usuario;
  total = 0;
  reserva = new Reserva;

  AgregarReservaForm = new FormGroup({
    codigo: new FormControl(''),
    cantidadDias: new FormControl(0),
    fechaInicio: new FormControl(''),
    total: new FormControl(0),
    habitacion: new FormGroup({
      codigo: new FormControl(0)
    }),
    usuario: new FormGroup({
      codigo: new FormControl(0)
    })
  });


  ngOnInit() {
    let HabitacionId = localStorage.getItem("DetalleHabitacionId");
    if(!HabitacionId) {
      alert("Reserva invalida");
      this.router.navigate(['list-habitacion']);
      return;
    }
    this.habitacionService.ListarHabitacionXId(+HabitacionId)
      .subscribe( data => {
        this.habitacion=data;
        console.log(this.habitacion)
      });
  }


  AgregarReserva() {
    this.total=this.habitacion.precio*this.AgregarReservaForm.value["cantidadDias"];
    this.reserva.usuario = this.usuarioService.getUsuarioLogueado();
    this.AgregarReservaForm.get('usuario.codigo').setValue(this.reserva.usuario.codigo);
    this.AgregarReservaForm.get('habitacion.codigo').setValue(this.habitacion.codigo);
    this.AgregarReservaForm.get('total').setValue(this.total);
    
    this.reservaService.ValidarFechas(this.AgregarReservaForm.value)
      .subscribe( data => {
        if(data!="Fechas validadas"){
          alert(data);
        }
        else{
          this.reservaService.AgregarReserva(this.AgregarReservaForm.value)
          .subscribe( data => {
            if(data!="Reserva agregada"){
              alert(data);
            }
            else{
              this.router.navigate(['add-reserva1']);
              alert(data);
            }
            
          });
        }
        
      });

   
  }

}
