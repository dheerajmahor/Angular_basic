import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  val=''
  myname=''
  myFun(){
      this.val='dheeraj';
  }
  showText(title) {

    this.myname=(title);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
