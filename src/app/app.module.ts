import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivesComponent } from './actives/actives.component';
import { NotActivesComponent } from './not-actives/not-actives.component';
import { NavComponent } from './nav/nav.component';
import { HighlightTextDirective } from './highlight-text.directive';
import { PostDetailsComponent } from './dettagli/dettagli.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'active',
    component: ActivesComponent,
    // children: [{ path: 'details', component: DettagliComponent }],
  },
  {
    path: 'inactive',
    component: NotActivesComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    // children: [{ path: 'user', component: '' }],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightTextDirective,
    HomeComponent,
    ActivesComponent,
    NotActivesComponent,
    NavComponent,
    HighlightTextDirective,
    PostDetailsComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
