import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import {AdminComponent } from './admin/admin.Component';
import {LoginComponent } from './login/login.component';
import {BuyitemComponent} from './buyitem/buyitem.component'; 
import {ViewcartComponent} from './viewcart/viewcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddremovebuyerComponent } from './addremovebuyer/addremovebuyer.component';
import { AddremovesellerComponent } from './addremoveseller/addremoveseller.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path:'user',component:UserComponent,children:[
    {path:'addcategory',component:AddcategoryComponent},
    {path:'addremovebuyer',component:AddremovebuyerComponent},
    {path:'addremoveseller',component:AddremovesellerComponent}
  ]},
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyitem',component:BuyitemComponent},
    {path:'viewcart',component:ViewcartComponent},
    {path:'payment',component:PaymentComponent},
  ]},
  {path:'seller',component:SellerComponent,children:[
    {path:'additem',component:AdditemComponent},
    {path:'viewitems',component:ViewitemsComponent},
  ]},
 
  {path:'login',component:LoginComponent},
 {path:'',redirectTo:'login',pathMatch:"full"}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
