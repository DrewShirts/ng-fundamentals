import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  // templateUrl: './events-thumbnail.component.html',
  template: `
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>{{ event.date }}</div>
        <div>{{ event.time }}</div>
        <div>\${{ event.price }}</div>
        <div>
          <span>{{ event.location.address }}</span>
          <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventsThumbnailComponent {

  @Input() event:any;

}
