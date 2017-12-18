import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BaseType } from 'd3';
import { makeCircle } from '../circle';
@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})

export class ExtensionsComponent implements OnInit {
  data: number[];
  w: 100;
  h: 100;
  constructor() {
    this.data = [1];
  }

  ngOnInit() {
    this.build1(); // the way that works
    this.build2(); // what I'm trying to achieve
  }

  build1() {
    var svg = d3.selectAll("#target1")
      .attr("width", this.w)
      .attr("height", this.h);

    // Old way
    svg.selectAll("g")
      .data(this.data)
      .enter()
      .append("g")
      .append('svg')
      .append('circle')
      .attr('fill', 'red')
      .attr('r', 20)
      .attr('cx', 200)
      .attr('cy', 100)
      .makeCircle();

  }

  build2() {
    // var svg = d3.selectAll("#target2")
    //   .attr("width", this.w)
    //   .attr("height", this.h);
    // svg.makeCircle();

  }




}
