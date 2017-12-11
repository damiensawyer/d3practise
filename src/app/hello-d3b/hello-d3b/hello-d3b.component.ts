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
    var w = 400;

    var monthlySales = [
      { "month": 10, "sales": 100 },
      { "month": 20, "sales": 130 },
      { "month": 30, "sales": 250 },
      { "month": 40, "sales": 300 },
      { "month": 50, "sales": 265 },
      { "month": 60, "sales": 225 },
      { "month": 70, "sales": 180 },
      { "month": 80, "sales": 120 },
      { "month": 90, "sales": 145 },
      { "month": 100, "sales": 130 }
    ];


    //create our SVG
    var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);


    //add dots
    var dots = svg.selectAll("circle")
      .data(monthlySales)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return d.month * 3; })
      .attr("cy", function (d) { return h - d.sales; })
      .attr("r", 5)
      .attr("fill", "#666666");

  }
}
