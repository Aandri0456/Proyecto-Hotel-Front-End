import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { UsuarioGuard } from './_guard/usuario.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { AddHabitacionComponent } from './add-habitacion/add-habitacion.component';
import { EditHabitacionComponent } from './edit-habitacion/edit-habitacion.component';
import { ListHabitacionComponent } from './list-habitacion/list-habitacion.component';
import { AddReserva1Component } from './add-reserva1/add-reserva1.component';
import { AddReserva2Component } from './add-reserva2/add-reserva2.component';
import { ListMyReservaComponent } from './list-my-reserva/list-my-reserva.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ReporteTopReservaComponent } from './reporte-top-reserva/reporte-top-reserva.component';
import { LoginEmpleadoComponent } from './login-empleado/login-empleado.component';
import { PagoReservaComponent } from './pago-reserva/pago-reserva.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { EmpleadoGuard } from './_guard/empleado.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-empleado', component: LoginEmpleadoComponent },

  { path: 'add-usuario', component: AddUsuarioComponent},
  { path: 'add-empleado', component: AddEmpleadoComponent, canActivate: [EmpleadoGuard] },
  { path: 'edit-empleado', component: EditEmpleadoComponent, canActivate: [EmpleadoGuard] },
  { path: 'list-empleado', component: ListEmpleadoComponent, canActivate: [EmpleadoGuard] },
  { path: 'add-habitacion', component: AddHabitacionComponent, canActivate: [EmpleadoGuard] },
  { path: 'edit-habitacion', component: EditHabitacionComponent, canActivate: [EmpleadoGuard] },
  { path: 'list-habitacion', component: ListHabitacionComponent, canActivate: [EmpleadoGuard] },
  { path: 'add-reserva1', component: AddReserva1Component, canActivate: [UsuarioGuard] },
  { path: 'add-reserva2', component: AddReserva2Component, canActivate: [UsuarioGuard] },
  { path: 'list-my-reserva', component: ListMyReservaComponent, canActivate: [UsuarioGuard] },
  { path: 'check-in', component: CheckInComponent, canActivate: [EmpleadoGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [EmpleadoGuard] },
  { path: 'reporte', component: ReporteTopReservaComponent, canActivate: [EmpleadoGuard] },
  { path: 'pagar-reserva', component: PagoReservaComponent, canActivate: [EmpleadoGuard] },
  { path: '', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);