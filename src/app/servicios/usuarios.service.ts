import { Usuario } from './../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  api:string = environment.api;

  constructor(private http:HttpClient) { }

  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.api);
  }

  agregarUsuario(usuario:Usuario):Observable<Usuario>{
     return this.http.post<Usuario>(this.api,usuario);
  }
  actualizarUsuario(usuario:Usuario,usuarioID:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.api}/${usuarioID.id}`,usuario);
  }
  eliminarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.api}/${usuario.id}`);
  }
}
