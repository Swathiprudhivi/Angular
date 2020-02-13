import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { Emp } from '../emp';
@Component({
  selector: 'app-demo-employee',
  templateUrl: './demo-employee.component.html',
  styleUrls: ['./demo-employee.component.css']
})
export class DemoEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  submitted=false;
  id:string;
  name:string;
  jdate:Date;
  designation:string;
  mobile:number;
  email:string;
  password:string;
  item:Emp;
  list:Emp[]=[];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.employeeForm=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern('^E[0-9]{4}$')]],
      name:['',[Validators.required,Validators.pattern('^[A-Z]{4,20}$')]],
     jdate:['',Validators.required],
     designation:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[a-zA-z]{7}[!@#$%^&*_]{1}$")]]
      
    });
  }
  get f() {return this.employeeForm.controls;}
  onSubmit()
  {
    
    this.submitted=true;
    //display form values on success
    if(this.employeeForm.valid) {
      alert('SUCCESS!! :-)\n\n')
      console.log(JSON.stringify(this.employeeForm.value));
      this.item=new Emp();
      this.item.id=this.employeeForm.value["id"];
      this.item.name=this.employeeForm.value["name"];
      this.item.jdate=this.employeeForm.value["jdate"];
      this.item.designation=this.employeeForm.value["designation"];
      this.item.mobile=this.employeeForm.value["mobile"];
      this.item.email=this.employeeForm.value["email"];
      this.item.password=this.employeeForm.value["password"];
      this.list.push(this.item);
    }
    
  }
 
}
