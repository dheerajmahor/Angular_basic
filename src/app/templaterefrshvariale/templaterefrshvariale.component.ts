import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templaterefrshvariale',
  templateUrl: './templaterefrshvariale.component.html',
  styleUrls: ['./templaterefrshvariale.component.css']
})
export class TemplaterefrshvarialeComponent implements OnInit {
  mydata:any=''
  currentVal=''
  myFun(name)
  {
    this.mydata=name;
  }
  getVal(val)
  {
    console.warn(val)
    this.currentVal=val
  }
  constructor() { }

  ngOnInit(): void {
  }

}
