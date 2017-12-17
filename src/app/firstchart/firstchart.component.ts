import { Component, Inject, OnInit } from '@angular/core';
import { AppConfig } from '../classes/AppConfigInterface';
import { SampleChartService } from '../classes/sample-chart';
import { APP_CONFIG } from '../classes/app-config';
import { ChartDate } from '../classes/chart-date';
import * as d3 from 'd3';

@Component({
  selector: 'app-firstchart',
  templateUrl: './firstchart.component.html',
  styleUrls: ['./firstchart.component.css']
})
export class FirstchartComponent implements OnInit {
  sampleChart: ChartDate[];
  w = 500;
  h = 500;
  constructor( @Inject(APP_CONFIG) config: AppConfig, sampleChart: SampleChartService) {
    this.sampleChart = sampleChart.simpleChart();
  }

  ngOnInit() {

    var svg = d3.selectAll(".target")
      .append('svg')
      .attr("class", "myspace")
      .attr("width", this.w)
      .attr("height", this.h);


    /*
This is close!! instead of dog, you could put a 'g' (remeber you're inside an svg). You then need to just replace the inner of that 
g with the markup of the releveant svg. .based on the data which is attached to it. THIS IS CLOSE!!

    */
    svg.selectAll("g")
      .data(this.sampleChart)
      .enter()
      .append("g")
      //.attr("class", "chartBlock")
      //.text(x => x.description)
      .append('svg')
      .append(this.getSVGContent2())
      .attr('r', 20);

  }

  getSVGContent2() {
    return `circle`;
  }

  getSVGContent() {
    return '<path d="M41.2,67.8H2.8c-1.4,0-2.5-1.1-2.5-2.5V2.8c0-1.4,1.1-2.5,2.5-2.5h38.5c1.4,0,2.5,1.1,2.5,2.5v62.5C43.7,66.6,42.6,67.8,41.2,67.8z"/>';
  }
}
