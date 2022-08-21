import { Usuario } from 'src/app/interfaces/usuario';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuarioForm!:FormGroup;


  constructor(private fb:FormBuilder,public dialogRef:MatDialogRef<AddUsuarioComponent>) {}

  ngOnInit(): void {
    this.usuarioForm = this.initFormUsuario();
  }

  initFormUsuario():FormGroup{
    return this.fb.group({
      nombre:['',[Validators.required,Validators.maxLength(15),Validators.minLength(5)]],
      apellidos:['',[Validators.required,Validators.maxLength(15),Validators.minLength(5)]],
      cedula:['',[Validators.required,Validators.maxLength(11),Validators.minLength(5)]],
      telefono:['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      correoElectronico:['',[Validators.required,Validators.email]],
    });
  }

  cerrar(){
    this.dialogRef.close();
  }
}
