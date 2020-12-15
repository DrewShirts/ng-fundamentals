import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div>
        <h2>{{ event.name }}</h2>
        <div>{{ event.date }}</div>
        <div>{{ event.time }}</div>
        <div>\${{ event.price }}</div>
        <div>
          <span>{{ event.location.address }}</span>
          <span>&nbsp;</span>
          <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
