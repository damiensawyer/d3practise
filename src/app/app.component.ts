import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <alert type="success">hello again</alert>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
