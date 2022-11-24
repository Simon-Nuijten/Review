import { Route } from '@angular/router';
import { BeeroverviewComponent } from './beeroverview/beeroverview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent  } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { RatingComponent } from './rating/rating.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'feed', pathMatch: 'full', component: FeedComponent },
  { path: 'overview', pathMatch: 'full', component: BeeroverviewComponent },
  { path: 'overview/:id', pathMatch: 'full', component: DetailComponent },  
  { path: 'overview/:id/edit', pathMatch: 'full', component: EditComponent }, 
  { path: 'CreateBeer', pathMatch: 'full', component: CreateComponent },  
  { path: 'rating', pathMatch: 'full', component: RatingComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
];
