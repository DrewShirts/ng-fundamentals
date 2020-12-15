import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  // templateUrl: './events-list.component.html'
  template: `
      <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <events-thumbnail [event]="event1"></events-thumbnail>
      </div>
    `
})
export class EventsListComponent {
  event1 = {
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

}
