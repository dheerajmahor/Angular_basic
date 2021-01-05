import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name ='dheeraj'
  num1:number=5
  num2:number=6
  
  myName()
  {
    return "dj"
  }
  upName(){
    return this.name
  }
  student={
     name:"dheeraj",
     laname:"mahor",
     email:"dheeraj45@gmail.com",
     address:"gwalior",
  }
  emp=["ajay","sanjay","kamal","ram"]

  url=window.location.href
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
