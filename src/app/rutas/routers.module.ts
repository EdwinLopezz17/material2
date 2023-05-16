import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {InicioComponent} from "../components/dashboard/inicio/inicio.component";
import {UsersComponent} from "../components/dashboard/users/users.component";
import {ReportsComponent} from "../components/dashboard/reports/reports.component";
import {CreateUserComponent} from "../components/dashboard/create-user/create-user.component"; // CLI imports router


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
      {path: '', component: InicioComponent},
      {path: 'users', component: UsersComponent},
      {path: 'reports', component:ReportsComponent},
      {path: 'createUser', component:CreateUserComponent },

    ]},


  {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
