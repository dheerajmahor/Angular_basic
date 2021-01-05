import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students=[
    {id:1,name:'arun',mobile:9787667676,education:'Btech'},
    {id:2,name:'varun',mobile:354355353,education:'Mtech'},
      ]
  


}
