import { ChartDate } from '../../classes/chart-date';
import { APP_CONFIG } from '../../classes/app-config';
import { inject } from '@angular/core/testing';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SampleChartService } from '../../classes/sample-chart';
import { AppConfig } from '../../classes/AppConfigInterface';

@Component({
  selector: 'app-hello-d3b',
  templateUrl: 'hello-d3b.html',
  styles: []
})
export class HelloD3bComponent implements OnInit {
  sampleChart: ChartDate[];
  message: string;
  constructor(@Inject(APP_CONFIG) config: AppConfig, sampleChart: SampleChartService) {
    this.message = config.name;
    this.sampleChart = sampleChart.simpleChart();
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
