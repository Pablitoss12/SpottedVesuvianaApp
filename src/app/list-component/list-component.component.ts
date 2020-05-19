import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss'],
})
export class ListComponentComponent implements OnInit {

  users: User[];

  constructor(http: HttpClient) {
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(result => {
      this.users = result;
    });
  }

  ngOnInit() {}


}

interface User {
  id: number;
  name: string;
}
