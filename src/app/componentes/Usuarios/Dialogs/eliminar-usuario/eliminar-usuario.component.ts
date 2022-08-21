import { Usuario } from './../../../../interfaces/usuario';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(public dialogref:MatDialogRef<EliminarUsuarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data:Usuario) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogref.close();
  }

}
