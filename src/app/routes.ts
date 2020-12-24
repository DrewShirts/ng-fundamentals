import { Routes } from '@angular/router';
import {
  EventsListComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
