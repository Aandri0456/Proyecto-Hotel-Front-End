import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../_service/reserva.service';
import { TarjetaResponse } from '../_model/tarjeta.model';
import { FormGroup, FormControl } from '@angular/forms';
import { HabitacionService } from '../_service/habitacion.service';

@Component({
  selector: 'app-pago-reserva',
  templateUrl: './pago-reserva.component.html',
  styleUrls: ['./pago-reserva.component.css']
})
export class PagoReservaComponent /*implements OnInit */{

  constructor(private router: Router, private reservaService: ReservaService,private habitacionService:HabitacionService) { }

  tarjetaResponse: TarjetaResponse;
  Precio:number;
  Id:number;
  Habitacion:number;


  RealizarPedidoForm = new FormGroup({
    NumeroTarjeta: new FormControl(''),
    TipoTarjeta: new FormControl(0),
    CodigoSeguridadTarjeta: new FormControl(''),
    TitularTarjeta: new FormControl(''),
    MesExpiracionTarjeta: new FormControl(''),
    AñoExpiracionTarjeta: new FormControl(''),
    MontoConsumir: new FormControl(0)
  });

  ngOnInit() {
    this.Habitacion = Number.parseInt(localStorage.getItem("PagarReservaHabitacion"));
    if(!this.Habitacion) {
      alert("Reserva invalida");
      this.router.navigate(['check-out']);
      return;
    }
    this.Id = Number.parseInt(localStorage.getItem("PagarReservaId"));
    if(!this.Id) {
      alert("Reserva invalida");
      this.router.navigate(['check-out']);
      return;
    }
    this.Precio = Number.parseFloat(localStorage.getItem("PagarReservaPrecio"));
    if(!this.Precio) {
      alert("Reserva invalida");
      this.router.navigate(['check-out']);
      return;
    }
    
  }
  RealizarPedido() {
    this.RealizarPedidoForm.get('MontoConsumir').setValue(this.Precio);
    this.reservaService.ValidarPago(this.RealizarPedidoForm.value)
      .subscribe(data => {
        this.tarjetaResponse = data;
        if (data.TransaccionCompleta) {
          this.reservaService.PagarReserva(this.Id)
            .subscribe(data => {
              if (data != "Reserva pagada") {
                alert(data); 
              }
              else {
                this.CheckOut();
                this.router.navigate(['check-out']);
              }

            });
          
     
        }
        else{
          alert(data.TransaccionMensaje);
        }
      });

  }

  CheckOut() {
    this.habitacionService.CheckOut(this.Id)
      .subscribe(data => {
        alert(data)
      });
  }
}
