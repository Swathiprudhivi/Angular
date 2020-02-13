import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import {ProductComponent } from './product/product.component';
import {RegisterComponent } from './register/register.component';
import { DemoEmployeeComponent } from './demo-employee/demo-employee.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'register',component:RegisterComponent},
  {path:'demo-employee',component:DemoEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
