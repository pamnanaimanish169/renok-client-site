import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './modules/error-404/error-404.component.module';

const routes = [
  { path : '' , redirectTo : 'home', pathMatch : 'full' },
  { path : 'home' , loadChildren : () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path : '**', component : Error404Component }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
