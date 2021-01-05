import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobaybinding',
  templateUrl: './twobaybinding.component.html',
  styleUrls: ['./twobaybinding.component.css']
})
export class TwobaybindingComponent implements OnInit {
  name:any='dheeraj'
  a:any='mahor'
  constructor() { }

  ngOnInit(): void {
  }

}
