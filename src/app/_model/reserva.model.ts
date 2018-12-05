import { Usuario } from "./usuario.model";
import { Habitacion } from "./habitacion.model";

export class Reserva {
    codigo: number;
    habitacion: Habitacion;
    usuario: Usuario;
    fechaRealizacion: Date;
    cantidadDias:number;
    fechaInicio:Date;
    estado:number;
    total:number;

    
    constructor() {
        
        this.usuario= new Usuario();
    }
}

