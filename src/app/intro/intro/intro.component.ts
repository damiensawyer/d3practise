import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <h1>Sample app for playing with D3 and practising Angular</h1>
    <p>Working throuhg <a href="https://www.dashingd3js.com/d3js-first-steps" target="_blank">D3 first steps</a> </p>
  `,
  styles: []
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
