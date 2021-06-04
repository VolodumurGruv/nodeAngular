import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  users: User[] = [];
  constructor(private server: ServerService) {}

  ngOnInit() {}
}
