import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HelloD3Component } from './hello-d3/hello-d3.component';
import { Routes, RouterModule } from '@angular/router';

var routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello-d3' },
  { path: 'hello-d3', component: HelloD3Component }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloD3Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
