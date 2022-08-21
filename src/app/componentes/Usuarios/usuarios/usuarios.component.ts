import { Usuario } from './../../../interfaces/usuario';
import { UsuariosService } from './../../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddUsuarioComponent } from '../Dialogs/add-usuario/add-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[]=[];
  iconAgregar = faPlus;


  constructor(private svcUsuario:UsuariosService,public modal:MatDialog ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this.svcUsuario.obtenerUsuarios().subscribe(resp=>{
      this.usuarios = resp;
    });
  }

  actualizarUsuario(usuario:Usuario[]){

    this.svcUsuario.actualizarUsuario(usuario[0],usuario[1]).subscribe(resultado =>{

      const usersTemp = this.usuarios.filter(item=>item.id !== usuario[1].id);
      this.usuarios = [...usersTemp,usuario[0]];

    });
  }

  eliminarUsuario(usuario:Usuario){

    this.svcUsuario.eliminarUsuario(usuario).subscribe(resp=>{

      const usuariosTemp = this.usuarios.filter(item=>item.id !== usuario.id);
      this.usuarios = [...usuariosTemp];

    });

  }

  agregarUsuario():void{

    const agregarUsuarioModal = this.modal.open(AddUsuarioComponent,{
    });

    agregarUsuarioModal.disableClose=true;

    agregarUsuarioModal.afterClosed().subscribe(resultado=>{
      console.log('el modal ha cerrado');
      if (resultado) {
         this.svcUsuario.agregarUsuario(resultado).subscribe(resp=>{
          this.usuarios.push(resp);
         });
      }else{
        console.log('modal resp sin data');
      }

    });

  }


}
