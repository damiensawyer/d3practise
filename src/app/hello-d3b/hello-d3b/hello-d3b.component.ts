import { ChartDate } from '../../classes/chart-date';
import { APP_CONFIG } from '../../classes/app-config';
import { inject } from '@angular/core/testing';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { SampleChartService } from '../../classes/sample-chart';
import { AppConfig } from '../../classes/AppConfigInterface';

@Component({
  selector: 'app-hello-d3b',
  templateUrl: 'hello-d3b.component.html',
  styleUrls: ['./hello-d3b.component.css']
})
export class HelloD3bComponent implements OnInit {
  sampleChart: ChartDate[];
  message: string;
  constructor( @Inject(APP_CONFIG) config: AppConfig, sampleChart: SampleChartService) {
    this.message = config.name;
    this.sampleChart = sampleChart.simpleChart();
  }

  ngOnInit() {
    var h = 550;
    var w = 900;

    var xScale = d3.scaleLinear().domain([0, this.sampleChart.length - 1]).range([0, w]);
    var yScale = d3.scaleLinear().domain([1, 100]).range([0, h]);
    var padding = 5;
    var r = (xScale(1) / 2) - padding;
    //create our SVG
    var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

    var d = this.sampleChart.slice(0, 30);
    //add dots
    var data = svg
      .selectAll("circle")
      .data(d)
      .enter();

    var line = d3.line()
      .x(a => xScale(a[0]))
      .y(a => yScale(a[1]));

    data.append("circle")
      .attr("cx", function (d, i) { return xScale(i) + r })
      .attr("cy", function (d) { return h / 2 })
      .attr("r", r)
      .attr("fill", "#666666");

    var points = <[number, number][]>_.map(d, (x, i) => [i, x.sticker]);
    data.append("path")
      .attr("d", line(points))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }
}
