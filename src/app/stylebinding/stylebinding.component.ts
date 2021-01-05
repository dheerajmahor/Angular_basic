import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
 mydiv={
   'color':'red',
   'background-color':'blue'
 }
 color="blue"
 err=true
 updateColor()
 {
   this.color="orange"
 }
  constructor() { }

  ngOnInit(): void {
  }

}
