import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
 c='computer'
 //show=true
 show=false
 isLoggedIn=false
 loggedOut=true
  constructor() { }

  ngOnInit(): void {
  }

}
