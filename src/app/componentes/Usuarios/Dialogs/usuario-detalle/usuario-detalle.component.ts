import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UsuarioDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Usuario,
    ) {}

   cerrar(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    //console.log(this.data);
  }

}
