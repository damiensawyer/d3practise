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
  styles: []
})
export class AppComponent {
  title = 'app';
}
