import { UsuariosService } from './../servicios/usuarios.service';
import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

let usuarios:Usuario[]=[];

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {

  constructor(private svcusuario:UsuariosService){}

  obtenerusuarios(){
    this.svcusuario.obtenerUsuarios().subscribe(resultado=>{
      usuarios = resultado;
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.obtenerusuarios();
    return of(usuarios);
  }
}
