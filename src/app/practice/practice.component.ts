import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
val=""
data=''
computer='cd'
show=true
students={
  id:1,
  name:"dheeraj",
  email:'dheeraj34@gmail.com',
  mobile:9843434
}
  getValue(value)
  {
     this.val=value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
