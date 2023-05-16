import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../models/users";
import {UsuariosService} from "../../../services/usuarios.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  sexo: any[] = [
    'Male', 'Female'
  ];

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private _userService:UsuariosService,
              private _router:Router,
              private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      user:[''],
      name:[''],
      lastName:[''],
      sexo:[''],

    })
  }

  addUser(){
    const user: User={
      user: this.form.value.user,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      sexo: this.form.value.sexo,
    }
    this._userService.addUser(user);
    this.form.reset();
    this._snackBar.open('Usuario Agregado correctamente','',{
      duration: 1500,
    })
    this._router.navigate(['/dashboard/users']);
  }

}
