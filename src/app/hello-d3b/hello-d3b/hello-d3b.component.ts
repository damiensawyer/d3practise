import { ChartDate } from '../../classes/chart-date';
import { APP_CONFIG } from '../../classes/app-config';
import { inject } from '@angular/core/testing';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';
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
    var h = 350;
    var w = 1200;
    var padding = 25;
    var xScale = d3.scaleLinear().domain([1, this.sampleChart.length]).range([padding + 5, w - padding]);
    var r = xScale(20);
    //create our SVG
    var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);


    //add dots
    var dots = svg.selectAll("circle")
      .data(this.sampleChart)
      .enter()
      .append("circle")
      .attr("cx", function (d, i) { return xScale(i) })
      .attr("cy", function (d) { return h / 2 })
      .attr("r", 20)
      .attr("fill", "#666666");

  }
}
