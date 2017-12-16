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
      .append('div')
      .attr("class", "myspace")
      .attr("width", this.w)
      .attr("height", this.h);


    /*
This is close!! instead of dog, you could put a 'g' (remeber you're inside an svg). You then need to just replace the inner of that 
g with the markup of the releveant svg. .based on the data which is attached to it. THIS IS CLOSE!!

    */
    svg.selectAll("dog")
      .data(this.sampleChart)
      .enter()
      .append("dog")
      .attr("class", "chartBlock")
      .text(x => x.description);

  }
}
