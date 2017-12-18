import { SampleChartService } from './classes/sample-chart';
import { providerDef } from '@angular/core/src/view/provider';
import { HelloD3bComponent } from './hello-d3b/hello-d3b/hello-d3b.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component, InjectionToken, NgModule, OnInit } from '@angular/core';
// import * as d3x from './d3extensions';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HelloD3Component } from './hello-d3/hello-d3.component';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro/intro.component';
import { APP_CONFIG, appConfig } from './classes/app-config';
import { Test4Component } from './classes/test4/test4.component';
import { FirstchartComponent } from './firstchart/firstchart.component';
import { StraighthtmlComponent } from './straighthtml/straighthtml.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { RegisterExtensions } from './d3extensions';
import * as d3 from 'd3';


var routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
  { path: 'intro', component: IntroComponent },
  { path: 'hello-d3', component: HelloD3Component },
  { path: 'hello-d3b', component: HelloD3bComponent },
  { path: 'straight-html', component: StraighthtmlComponent },
  { path: 'extensions', component: ExtensionsComponent },
  { path: 'firstchart', component: FirstchartComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloD3Component,
    HelloD3bComponent,
    IntroComponent,
    Test4Component,
    FirstchartComponent,
    StraighthtmlComponent,
    ExtensionsComponent

  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_CONFIG, useValue: appConfig },
    SampleChartService,
    RegisterExtensions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
} 
