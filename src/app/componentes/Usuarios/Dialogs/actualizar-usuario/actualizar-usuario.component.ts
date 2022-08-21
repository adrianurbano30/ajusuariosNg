import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../../../interfaces/usuario';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  actualizarUserForm!:FormGroup;

  constructor(private fb:FormBuilder,public dialogRef:MatDialogRef<ActualizarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Usuario) {}

  ngOnInit(): void {
    this.actualizarUserForm = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre:[this.data.nombre,[Validators.required,Validators.maxLength(15),Validators.minLength(5)]],
      apellidos:[this.data.apellidos,[Validators.required,Validators.maxLength(15),Validators.minLength(5)]],
      cedula:[this.data.cedula,[Validators.required,Validators.maxLength(11),Validators.minLength(5)]],
      telefono:[this.data.telefono,[Validators.required,Validators.maxLength(11),Validators.minLength(5)]],
      correoElectronico:[this.data.correoElectronico,[Validators.required,Validators.email]],
    });
  }

  cerrar(){
    this.dialogRef.close();
  }

}
