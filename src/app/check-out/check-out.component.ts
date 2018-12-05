import { Component, OnInit } from '@angular/core';
import { Reserva } from '../_model/reserva.model';
import { Router } from '@angular/router';
import { ReservaService } from '../_service/reserva.service';
import { HabitacionService } from '../_service/habitacion.service';
import { Habitacion } from '../_model/habitacion.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  reservas: Reserva[];

  constructor(private router: Router, private reservaService: ReservaService,private habitacionService: HabitacionService) { }

  ngOnInit() {
    this.reservaService.ListarReservaxestado(1)
      .subscribe(data => {
        this.reservas = data;
      });
  }

  


  PagarReserva(total: number,codigo:number,habitacion:Habitacion) {
    localStorage.removeItem("PagarReservaId");
    localStorage.setItem("PagarReservaId", codigo.toString());
    localStorage.removeItem("PagarReservaPrecio");
    localStorage.setItem("PagarReservaPrecio", total.toString());
    localStorage.removeItem("PagarReservaHabitacion");
    localStorage.setItem("PagarReservaHabitacion", habitacion.codigo.toString());
    this.router.navigate(['pagar-reserva']);
  }

  formatearFecha(fecha:Date){
    
    var fechaDate = new Date(fecha);
     var dia = fechaDate.getDate();
     var mes = fechaDate.getMonth()+1;
     var año = fechaDate.getFullYear();
     return dia+"/"+mes+"/"+año;
  }
}
