import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared/index';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-input-placeholder { color: #999; }
    .error :-moz-input-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  newEvent: IEvent;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
