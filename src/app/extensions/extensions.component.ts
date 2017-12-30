import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BaseType, AxisScale } from 'd3';
import { RegisterExtensions, CustomSelection } from '../d3extensions';
import * as _ from 'lodash';
import { PositinedChartDate } from '../classes/chart-date';
@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})

export class ExtensionsComponent implements OnInit {
  data: PositinedChartDate[][] = [];
  title: string = '';
  sticker: string = '';
  w = 700;
  h = 500;
  constructor(public extensions: RegisterExtensions) {
    this.data[0] = this.extensions.GetData(1);
    this.data[1] = this.extensions.GetData(2);
  }

  ngOnInit() {
    this.build(0);
  }

  mode(mode: number) {
    this.build(mode);
  }

  build(dataSet: number) {
    var chartData = this.data[dataSet]

    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = this.w - margin.left - margin.right,
      height = this.h - margin.top - margin.bottom;

    var max = d3.max(_.map(chartData, cd => cd.x));
    var xScale = d3.scaleLinear().range([0, width]).domain([0, 100]);
    var yScale = d3.scaleLinear().range([height, 0]).domain([0, 500]);


    var svg = d3.selectAll("#target2")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);
    //.append("g").attr("transform", "scale(0.5)") // make the whole chart smaller!! 
    //.append("g")
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    this.drawAxis(svg, width, height, xScale, yScale, margin);

    svg.selectAll("image").remove();


    svg.selectAll("image")
      .data(chartData)
      .enter()
      .processSticker(xScale, yScale);

    //.ease("linear")
    ;


    // chartData.forEach(element => {
    //   svg.drawSticker(xScale, yScale, element.x, element.y, element.sticker)
    // });

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
