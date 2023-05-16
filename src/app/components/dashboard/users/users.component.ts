import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../models/users";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsuariosService} from "../../../services/usuarios.service";
import {MatSnackBar} from "@angular/material/snack-bar";






@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  listUsers:User[]=[];

  displayedColumns: string[] = ['user', 'name', 'lastName', 'sexo', 'actions'];

  dataSource!:MatTableDataSource<any>;

  constructor(private _userService:UsuariosService,
              private _snackBar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.cargarUsers();
  }
  cargarUsers(){
    this.listUsers = this._userService.getAllUsers();
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(pos:number){
    this._userService.deleteUserByPos(pos);
    this.cargarUsers();

    this._snackBar.open('El usuario correctamente','',{
      duration: 1500,
    })
  }

}
