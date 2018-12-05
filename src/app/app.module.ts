import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { HabitacionService } from './_service/habitacion.service';
import { UsuarioGuard } from './_guard/usuario.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { UsuarioService } from './_service/usuario.service';
import { EmpleadoService } from './_service/empleado.service';
import { ListHabitacionComponent } from './list-habitacion/list-habitacion.component';
import { AddHabitacionComponent } from './add-habitacion/add-habitacion.component';
import { EditHabitacionComponent } from './edit-habitacion/edit-habitacion.component';
import { AddReserva1Component } from './add-reserva1/add-reserva1.component';
import { AddReserva2Component } from './add-reserva2/add-reserva2.component';
import { ReservaService } from './_service/reserva.service';
import { ListMyReservaComponent } from './list-my-reserva/list-my-reserva.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ReporteTopReservaComponent } from './reporte-top-reserva/reporte-top-reserva.component';
import { LoginEmpleadoComponent } from './login-empleado/login-empleado.component';
import { PagoReservaComponent } from './pago-reserva/pago-reserva.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { EmpleadoGuard } from './_guard/empleado.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUsuarioComponent,
    NotFoundComponent,
    AddEmpleadoComponent,
    ListEmpleadoComponent,
    EditEmpleadoComponent,
    ListHabitacionComponent,
    AddHabitacionComponent,
    EditHabitacionComponent,
    AddReserva1Component,
    AddReserva2Component,
    ListMyReservaComponent,
    CheckInComponent,
    ReporteTopReservaComponent,
    LoginEmpleadoComponent,
    PagoReservaComponent,
    CheckOutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule.forRoot()
  ],
  providers: [UsuarioService,HabitacionService,UsuarioGuard,EmpleadoGuard,ReservaService,EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
