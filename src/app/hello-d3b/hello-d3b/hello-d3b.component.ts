import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-hello-d3b',
  template: `
    <p>
      hello-d3b works!
    </p>
  `,
  styles: []
})
export class HelloD3bComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        d3
          .select('p')
          .append('svg')
          .attr('width', 50)
          .attr('height', 50)
          .append('circle')
          .attr('cx', 25)
          .attr('cy', 25)
          .attr('r', 25)
          .style('fill', 'purple');
  }

}
