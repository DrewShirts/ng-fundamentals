import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template:`
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i *ngIf="voted" class="glyphIcon glyphIcon-heart"></i>
          <i *ngIf="!voted" class="glyphIcon glyphIcon-heart-empty"></i>
        </div>
        <div class="badge badge-inverse votingcount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
