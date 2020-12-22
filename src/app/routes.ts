import { Routes } from '@angular/router';
import {
  EventsListComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
