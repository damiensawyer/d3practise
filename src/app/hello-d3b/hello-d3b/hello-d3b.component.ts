import { ChartDate } from '../../classes/chart-date';
import { APP_CONFIG } from '../../classes/app-config';
import { inject } from '@angular/core/testing';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { SampleChartService } from '../../classes/sample-chart';
import { AppConfig } from '../../classes/AppConfigInterface';
import { Element } from '@angular/compiler';

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

  mode(setting: number) {
    this.draw(setting);
  }

  draw(setting: number) {
    var h = 550;
    var w = 900;

    var xScale = d3.scaleLinear().domain([0, this.sampleChart.length - 1]).range([0, w]);
    var yScale = d3.scaleLinear().domain([1, 100]).range([0, h]);
    var yAxis = d3.axisLeft(yScale);

    var padding = 5;
    var r = ((xScale(1) / 2) - padding) * setting;
    //create our SVG
    // var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
    var svg = d3.select("body").select("#target").attr("width", w).attr("height", h);


    var axis = svg.append("g").call(yAxis)
      .attr("class", "axis")
      .attr("transform", "translate(" + padding + ",0)");


    var d = this.sampleChart.slice(0, 30);
    //add dots
    var data = svg
      .selectAll(".sticker")
      .data(d)
      .enter();

    var line = d3.line()
      .x(a => xScale(a[0]))
      .y(a => yScale(a[1]));

    data.append("circle");
    data.selectAll("circle")
      .transition()
      .duration(500)
      .ease(d3.easeBounceOut)
      .attr("cx", function (d, i) { return xScale(i) + r })
      .attr("cy", function (d) { return h / (2 + setting) })
      .attr("r", r)
      .attr("fill", "#666666");

    var points = <[number, number][]>_.map(d, (x, i) => [i, x.sticker]);
    data.append("path")
      .attr("d", line(points))
      .attr("stroke", "red")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    //var ss = d3.xml("../../../assets/Set1/11-PossiblyFertifle.svg", (this: Request, error: any, d: any) => { });
    // var ss = d3.xml("../../../assets/Set1/11-PossiblyFertifle.svg", (t: Request, d: any) => {
    //   var importedNode = document.importNode(d.documentElement, true);

    //   d3.selectAll("circle")
    //     .each((c: HTMLElement) => {
    //       c.appendChild(importedNode);
    //     });

    // });


    // d3.xml("./atom.svg", "image/svg+xml", function (xml) {
    //   document.getElementById('atom').appendChild(xml.documentElement);
    //   window.setInterval(redElectron.draw, 50);
    //   window.setInterval(purpleElectron.draw, 45);
    //   window.setInterval(dash.draw, 45);
    // });



  }

  ngOnInit() {
    this.draw(1);
  }
}
