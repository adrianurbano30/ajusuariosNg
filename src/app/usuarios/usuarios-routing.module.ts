import { UsuariosComponent } from './../componentes/Usuarios/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from '../resolvers/data.resolver';

const routes: Routes = [
  {path:'',component:UsuariosComponent,
   resolve:{usuarios:DataResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
