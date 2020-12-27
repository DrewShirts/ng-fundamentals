import { Component, OnInit } from '@angular/core';
import { ISession, EventService, IEvent } from '../events';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right:100px;}
    @media (max-width:1200px) {#searchForm {display:none}}
    li > a.active {color: #F97924;}
  `]
})
export class NavBarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  allEvents: IEvent[];

  constructor(public auth:AuthService, private eventService:EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      events => {
        this.allEvents = events;
      });
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      })
  }
}
