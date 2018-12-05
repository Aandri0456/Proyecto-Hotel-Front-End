import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../_model/habitacion.model';
import { Router } from '@angular/router';
import { HabitacionService } from '../_service/habitacion.service';
import { ReservaService } from '../_service/reserva.service';
import { Reserva } from '../_model/reserva.model';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  reservas: Reserva[];

  constructor(private router: Router,private reservaService: ReservaService, private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.reservaService.ListarReservaxestado(0)
    .subscribe(data => {
      this.reservas = data;
    });
  }

  CancelarReserva(reserva) {
    this.reservaService.CancelarReserva(reserva.codigo)
      .subscribe(data => {
        alert(data)
        this.reservaService.ListarReservaxestado(0)
        .subscribe(data => {
          this.reservas = data;
        });
      });
  }


  CheckIn(reserva) {
    this.habitacionService.CheckIn(reserva)
      .subscribe(data => {
        alert(data)
        this.reservaService.ListarReservaxestado(0)
        .subscribe(data => {
          this.reservas = data;
        });
      });
  }

  formatearFecha(fecha:Date){
    
    var fechaDate = new Date(fecha);
     var dia = fechaDate.getDate();
     var mes = fechaDate.getMonth()+1;
     var año = fechaDate.getFullYear();
     return dia+"/"+mes+"/"+año;
  }
}
