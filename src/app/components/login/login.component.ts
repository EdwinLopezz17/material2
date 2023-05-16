import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  louding = false;

  constructor(private fb:FormBuilder,
              private _snackBar:MatSnackBar,
              private _router:Router) {
    this.form = this.fb.group({
      usuario:[''],
      password:[''],
    })
  }

  ingresar(){
    const user = this.form.value.usuario;
    const pass = this.form.value.password;

    if(user=='admin' && pass=='admin123'){
      this.fakeLouding();

    }else{
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Usuario o contraseña invalidos','',{
      duration: 3000,
    })
  }
  fakeLouding(){
    this.louding=true;
    setTimeout(()=>{
      this._router.navigate(['dashboard']);
    }, 1500);

  }

}
