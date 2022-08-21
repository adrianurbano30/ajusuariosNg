import { EliminarUsuarioComponent } from './../Dialogs/eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './../Dialogs/actualizar-usuario/actualizar-usuario.component';
import { UsuarioDetalleComponent } from './../Dialogs/usuario-detalle/usuario-detalle.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent {

  @Input() usuario!:Usuario;
  @Output() editUsuario:EventEmitter<Usuario[]> = new EventEmitter();
  @Output() deleteUsuario:EventEmitter<Usuario> = new EventEmitter();

  iconEliminar = faTrashCan;
  iconActualizar = faPen;


  constructor(public dialog:MatDialog) { }

  mdlverUsuario():void{
    const dialogRef = this.dialog.open(UsuarioDetalleComponent,{
        data:this.usuario
    });
  }

  mdlupdateUsuario(){
    const updateUsuario = this.dialog.open(ActualizarUsuarioComponent,{
      data:this.usuario
    });

    updateUsuario.disableClose=true;

    updateUsuario.afterClosed().subscribe(result =>{
      console.log('el mdl de update se ha cerrado');
      let users!:Usuario[];
      if (result) {
        users = result;
        this.editUsuario.emit(users);
      }else{
        console.log('cerrado sin result');
      }

    });
  }

  mdleliminarUsuario(){
    const deleteUsuario = this.dialog.open(EliminarUsuarioComponent,{
      data:this.usuario
    });

    deleteUsuario.afterClosed().subscribe(resp=>{

        console.log('el mdl eliminarUsuario se ha cerrado');

        if(resp) {

          this.deleteUsuario.emit(resp);

        }else{
          console.log('mdal cerrado sin confirmar eliminado');
        }
    });

  }

}
