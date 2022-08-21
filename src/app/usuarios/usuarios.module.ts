import { HttpClientModule } from '@angular/common/http';
import { UsuarioDetalleComponent } from './../componentes/Usuarios/Dialogs/usuario-detalle/usuario-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioItemComponent } from './../componentes/Usuarios/usuario-item/usuario-item.component';
import { UsuariosComponent } from './../componentes/Usuarios/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUsuarioComponent } from '../componentes/Usuarios/Dialogs/add-usuario/add-usuario.component';
import { ActualizarUsuarioComponent } from './../componentes/Usuarios/Dialogs/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './../componentes/Usuarios/Dialogs/eliminar-usuario/eliminar-usuario.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioItemComponent,
    UsuarioDetalleComponent,
    AddUsuarioComponent,
    ActualizarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,

  ]
})
export class UsuariosModule { }
