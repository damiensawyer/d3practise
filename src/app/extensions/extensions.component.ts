import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BaseType, AxisScale } from 'd3';
import { RegisterExtensions, CustomSelection } from '../d3extensions';
@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})

export class ExtensionsComponent implements OnInit {

  sticker: string = '';
  data: number[];
  w = 700;
  h = 500;
  constructor(extensions: RegisterExtensions) {
    this.data = [1];
  }

  ngOnInit() {
    this.build();
  }


  build() {
    var data = [10, 15, 20, 30, 60, 77];
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = this.w - margin.left - margin.right,
      height = this.h - margin.top - margin.bottom;

    var xScale = d3.scaleLinear().range([0, width]).domain([0, d3.max(data)]);
    var yScale = d3.scaleLinear().range([height, 0]).domain([0, 500]);

    // var svg = d3.selectAll("#target2")
    //   .attr("width", this.w)
    //   .attr("height", this.h);

    var svg = d3.selectAll("#target2")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      //.append("g").attr("transform", "scale(0.5)") // make the whole chart smaller!! 
      .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    this.drawAxis(svg, width, height, xScale, yScale, margin);

    svg.makePositionedCircle(xScale, yScale, 50, 50, 'red');
    svg.makePositionedCircle(xScale, yScale, 40, 450, 'yellow');
    svg.makePositionedCircle(xScale, yScale, 10, 450, 'green');

    //    svg.makePositionedSVG(xScale, yScale, 40, 150, '<circle class="circle2" cx="20" cy="20" fill="pink" r="20"></circle>');
    svg.makePositionedSVG('<rect width="30" height="10" style="fill:teal;stroke-width:1;stroke:rgb(0,0,0)" />', xScale, yScale, 40, 50);
  }

  drawAxis<Domain>(svg: CustomSelection,
    width: number,
    height: number,
    xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    margin: { top: number; right: number; bottom: number; left: number; }) {
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    // text label for the x axis
    svg.append("text")
      .attr("transform",
      "translate(" + (width / 2) + " ," +
      (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Date");

    // Add the y Axis
    svg.append("g")
      .call(d3.axisLeft(yScale));

    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Value")
  }

}
