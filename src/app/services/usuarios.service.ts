import { Injectable } from '@angular/core';
import {User} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listUsers: User[] = [
    {user: 'jRori', name: 'Raula', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Rodrigo', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Rodrigo', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    {user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
    { user: 'jRori', name: 'Jose', lastName: 'Ramirez', sexo:'Male'},
  ];
  constructor() { }

  getAllUsers(){
    return this.listUsers.slice();
  }
  deleteUserByPos(pos:number){
    this.listUsers.splice(pos,1);
  }
  addUser(user: User){
    this.listUsers.push(user);
  }
}
