import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  

name:string;
priority:Range;
sdate:Date;
edate:Date;
item:Task;
list:Task[]=[];
  constructor() { 
    this.item=new Task();
  }

  ngOnInit() :void {
  }
public Addtask()
{
 
  this.item.name=this.name;
  this.item.priority=this.priority;
  this.item.sdate=this.sdate;
  this.item.edate=this.edate;
if(localStorage.getItem('tsk'))
{
  this.list=JSON.parse(localStorage.getItem('tesk'));

}
this.list.push(this.item);
localStorage.setItem("tsk",JSON.stringify(this.list));
console.log(this.list)
}
public Reset()
{
  //sessionStorage.clear();
  
}
}
