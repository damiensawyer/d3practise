import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a class="btn btn-info" [routerLink]="['/intro']">intro</a>
    <a class="btn btn-info" [routerLink]="['/hello-d3']">d3</a>
    <a class="btn btn-info" [routerLink]="['/hello-d3b']">d3b</a>
   <div class="well">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: ['html body {background-color: rgba(0,0,0,1.00)}']
})
export class AppComponent {
  title = 'app';
}
