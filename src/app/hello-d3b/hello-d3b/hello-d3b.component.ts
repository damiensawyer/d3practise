import { APP_CONFIG, AppConfig } from '../../classes/app-config';
import { inject } from '@angular/core/testing';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-hello-d3b',
  template: `
    <p>
      hello-d3b works!
      {{ message }}
    </p>
  `,
  styles: []
})
export class HelloD3bComponent implements OnInit {
  message: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.message = config.name;
  }

  ngOnInit() {
    d3
      .select('p')
      .append('svg')
      .attr('width', 350)
      .attr('height', 350)
      .append('circle')
      .attr('cx', 150)
      .attr('cy', 125)
      .attr('r', 25)
      .style('fill', 'red');
  }
}
