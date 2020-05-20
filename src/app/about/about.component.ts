import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  user: any[] ;
  constructor(httpclient: HttpClient) {
    setTimeout(() => {
      httpclient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(result => this.user = result);
    }, 2000);
  }

  ngOnInit() {}

}
