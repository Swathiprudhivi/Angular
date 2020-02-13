import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm:FormGroup;
  submitted=false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.productForm=this.formbuilder.group({
      pid:['',Validators.required],
      pname:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    });
  }
  onSubmit()
  {
    this.submitted=true;
    if(!this.productForm.invalid)
    {
      return;
    }
    else
    {
      alert("Form")
    }
  }
    //convenience getter for easy access to form fields
    get f() { return this.productForm.controls;}
    onreset()
    {
      this.submitted=false;
      this.productForm.reset();
    }
}
