import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { EliminarUsuarioComponent } from './componentes/Usuarios/Dialogs/eliminar-usuario/eliminar-usuario.component';
//import { ActualizarUsuarioComponent } from './componentes/Usuarios/Dialogs/actualizar-usuario/actualizar-usuario.component';
//import {MatDialogModule} from '@angular/material/dialog';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import { UsuarioDetalleComponent } from './componentes/Usuarios/Dialogs/usuario-detalle/usuario-detalle.component';
//import { UsuarioItemComponent } from './componentes/Usuarios/usuario-item/usuario-item.component';
//import { UsuariosComponent } from './componentes/Usuarios/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Error404Component,
    //EliminarUsuarioComponent,
    //ActualizarUsuarioComponent,
    //AddUsuarioComponent,
    //UsuarioDetalleComponent,
    //UsuarioItemComponent,
    //UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule,
    UsuariosModule,
    FontAwesomeModule,
    //MatDialogModule,
    //MatFormFieldModule
  ],
  exports:[
    //UsuarioItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
