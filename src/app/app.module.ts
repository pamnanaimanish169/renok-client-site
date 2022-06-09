import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './modules/error-404/error-404.component.module';
import { SharedModule } from './modules/shared/shared.module';

const routes = [
  { path : '' , redirectTo : 'home', pathMatch : 'full' },
  { path : 'home' , loadChildren : () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path : 'experiences', loadChildren : () => import('./modules/experiences/experiences.module').then(m => m.ExperienceModule)},
  { path : 'booking', loadChildren : () => import('./modules/bookings/bookings.module').then(m => m.BookingModule)},
  { path : 'activity', loadChildren : () => import('./modules/activity/activity.module').then(m => m.ActivityModule)},
  { path : '**', component : Error404Component }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
