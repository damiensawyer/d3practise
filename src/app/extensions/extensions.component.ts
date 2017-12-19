import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BaseType } from 'd3';
import * as c from '../d3extensions';
import { RegisterExtensions } from '../d3extensions';
@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})

export class ExtensionsComponent implements OnInit {
  sticker: string = '';
  data: number[];
  w: 500;
  h: 500;
  constructor() {
    this.data = [1];
  }

  ngOnInit() {
    this.build();
  }


  build() {
    var data = [10, 15, 20, 30, 60, 77];
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear().range([0, width]).domain([0, d3.max(data)]);
    var y = d3.scaleLinear().range([height, 0]).domain([0, 500]);

    var svg = d3.select("#target2")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


    // text label for the x axis
    svg.append("text")
      .attr("transform",
      "translate(" + (width / 2) + " ," +
      (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Date");

    // Add the y Axis
    svg.append("g")
      .call(d3.axisLeft(y));

    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Value");
    //svg.makeCircle('orange', 200, 100)
    // svg.makeCircle('green', 250, 80)
    //   .sendMessage()
    //   .sendMessage();

    // svg.appendSVG('<circle class="circle2" cx="20" cy="20" r="20"></circle>');
    //svg.appendSVG('<g><rect width="300" fill="purple" height="30"></rect></g>');
    // svg.appendSVG('<rect width="400" fill="yellow" height="30"></rect>');
    //svg.appendSVGFull(this.sticker);
    // .attr("transform", "translate(" + (500) + ",0)"); // This isn't moving. I think that I Have to remove the svg, put the classes in a namespace, just have the <g> then positioni that. 




  }
}
