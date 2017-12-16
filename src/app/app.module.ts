import { SampleChartService } from './classes/sample-chart';
import { providerDef } from '@angular/core/src/view/provider';
import { HelloD3bComponent } from './hello-d3b/hello-d3b/hello-d3b.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, InjectionToken, NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HelloD3Component } from './hello-d3/hello-d3.component';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro/intro.component';
import { APP_CONFIG, appConfig } from './classes/app-config';
import { Test4Component } from './classes/test4/test4.component';
import { FirstchartComponent } from './firstchart/firstchart.component';

var routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'hello-d3', component: HelloD3Component },
  { path: 'hello-d3b', component: HelloD3bComponent },
  { path: 'firstchart', component: FirstchartComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloD3Component,
    HelloD3bComponent,
    IntroComponent,
    Test4Component,
    FirstchartComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_CONFIG, useValue: appConfig },
    SampleChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
