import { Component, OnInit } from '@angular/core';
import { Reserva } from '../_model/reserva.model';
import { Router } from '@angular/router';
import { ReservaService } from '../_service/reserva.service';
import { UsuarioService } from '../_service/usuario.service';
import { Usuario } from '../_model/usuario.model';

@Component({
  selector: 'app-list-my-reserva',
  templateUrl: './list-my-reserva.component.html',
  styleUrls: ['./list-my-reserva.component.css']
})
export class ListMyReservaComponent implements OnInit {

  reservas: Reserva[];
  usuario:Usuario;

  constructor(private router: Router, private reservaService: ReservaService,private ususarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario=this.ususarioService.getUsuarioLogueado();
    this.reservaService.ListarReservaXUsuario(this.usuario.codigo)
      .subscribe(data => {
        this.reservas = data;
      });
  }

  CancelarReserva(reserva) {
    this.reservaService.CancelarReserva(reserva.codigo)
      .subscribe(data => {
        alert(data)
        this.reservaService.ListarReservaXUsuario(this.usuario.codigo)
          .subscribe(data1 => {
            this.reservas = data1;
          });
      });
  }


  ReservaCancelable(id):boolean{
    for(let re of this.reservas){
      if(re.codigo==id){
        if(re.estado==0){
          return true;
        }
        
      }
    }
    return false;
  }
  

  ReservaPagada(id):boolean{
    for(let re of this.reservas){
      if(re.codigo==id){
        if(re.estado==3){
          return true;
        }
        
      }
    }
    return false;
  }


  PagarReserva(total: number,codigo:number) {
    localStorage.removeItem("PagarReservaId");
    localStorage.setItem("PagarReservaId", codigo.toString());
    localStorage.removeItem("PagarReservaPrecio");
    localStorage.setItem("PagarReservaPrecio", total.toString());
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
