import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerComponent } from './buyer/buyer.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
//import { AdminComponent } from './admin/admin.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddremovebuyerComponent } from './addremovebuyer/addremovebuyer.component';
import { AddremovesellerComponent } from './addremoveseller/addremoveseller.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerComponent,
    LoginComponent,
    SellerComponent,
    //AdminComponent,
    BuyitemComponent,
    ViewcartComponent,
    PaymentComponent,
    AdditemComponent,
    ViewitemsComponent,
    AddcategoryComponent,
    AddremovebuyerComponent,
    AddremovesellerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
