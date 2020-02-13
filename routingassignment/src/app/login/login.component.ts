import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;
errmsg:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  public Validate()
  {
    if(this.uname=='swathi' &&this.pwd=='12345')
    {
      //set value in sessiom
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('admin')//user is name of the route
    }
    else if(this.uname=="swa" && this.pwd=='12345')
    {
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('buyer')//user is name of the route
    }
   else if(this.uname=='pru' && this.pwd=='12345')
   {
     sessionStorage.setItem("un",this.uname)
    this.route.navigateByUrl('seller')//user is name of the route
   }
    else
    {
      this.errmsg="Invalid login details";
    }
  }
}
