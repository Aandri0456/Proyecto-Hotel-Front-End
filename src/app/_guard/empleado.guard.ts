import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { EmpleadoService } from "../_service/empleado.service";


@Injectable()
export class EmpleadoGuard implements CanActivate {

    constructor(private empleadoService : EmpleadoService,private router: Router){

    }

    canActivate():boolean{
        var empleado = this.empleadoService.getEmpleadoLogueado();
        if(empleado==null){
            alert("Empleado no autenticado");
            this.router.navigate(['/login']);
        }
        return empleado!=null;
    }

}
