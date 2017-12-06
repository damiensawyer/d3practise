import { HelloD3bComponent } from './hello-d3b/hello-d3b/hello-d3b.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, InjectionToken, NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HelloD3Component } from './hello-d3/hello-d3.component';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro/intro.component';
import { APP_CONFIG, AppConfig, appConfig } from './classes/app-config';

var routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'hello-d3', component: HelloD3Component },
  { path: 'hello-d3b', component: HelloD3bComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloD3Component,
    HelloD3bComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide:APP_CONFIG, useValue:appConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
