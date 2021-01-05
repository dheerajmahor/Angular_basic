import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
 name='mits'
 hide:boolean=true;
 disableBox =true

 enableBox(){
    this.disableBox=false
    alert("success")
 }
  constructor() { }
  
  ngOnInit(): void {
  }

}
