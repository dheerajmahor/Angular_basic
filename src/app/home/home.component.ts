import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resdata;
  newsdata;
  constructor(private http:HttpClient) { }

  restoform = new FormGroup({
     
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    id: new FormControl(''),
   
  })

  ngOnInit(): void {
    /* const url ="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e03f994525084d9191c8b0fd1899a8ac";
    this.http.get(url).subscribe(
      res=>{
        //console.log(res)
        this.resdata=res;
         this.newsdata =this.resdata.articles;
         console.log(this.resdata);
      }
    ) */
  }
  onSubmit()
  {
    console.log(this.restoform.value);

  }

}
