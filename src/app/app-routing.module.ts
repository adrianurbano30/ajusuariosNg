import { UsuariosComponent } from './componentes/Usuarios/usuarios/usuarios.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'usuarios',loadChildren:()=>import('./usuarios/usuarios.module').then(m=>m.UsuariosModule)},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
