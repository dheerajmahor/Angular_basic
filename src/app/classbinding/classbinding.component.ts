import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  
  myclass2={
    'myclass':true
    //'myclass':false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
