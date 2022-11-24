import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { BeeroverviewComponent } from './beeroverview/beeroverview.component';
import { RatingComponent } from './rating/rating.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavComponent,
    DashboardComponent,
    FeedComponent,
    BeeroverviewComponent,
    RatingComponent,
    AboutComponent,
    DetailComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
