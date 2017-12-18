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
  data: number[];
  w: 100;
  h: 100;
  constructor(extensions: RegisterExtensions) {
    this.data = [1];
  }

  ngOnInit() {
    this.build1(); // the way that works
    this.build2(); // what I'm trying to achieve
  }

  build1() {
    var svg = d3.selectAll("#target1")
      .attr("width", this.w)
      .attr("height", this.h);

    // Old way
    svg.selectAll("g")
      .data(this.data)
      .enter()
      .append("g")
      .append('svg')
      .append('circle')
      .attr('fill', 'red')
      .attr('r', 20)
      .attr('cx', 200)
      .attr('cy', 100)
      .sendMessage()
      .sendMessage();

  }

  build2() {
    var svg = d3.selectAll("#target2")
      .attr("width", this.w)
      .attr("height", this.h);

    svg.makeCircle('orange', 200, 100)
    svg.makeCircle('green', 250, 80)
      .sendMessage()
      .sendMessage();

    svg.appendSVG('<circle class="circle2" cx="20" cy="20" r="20"></circle>');
    svg.appendSVG('<rect width="300" fill="purple" height="30"></rect>');

    svg.appendSVG(`
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 44 68" style="enable-background:new 0 0 44 68;" xml:space="preserve">
<style type="text/css">
	.doc19 .st0{fill:#FFB74D;stroke:#E59225;stroke-width:0.5;stroke-miterlimit:10;}
	.doc19 .st1{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
	.doc19 .st2{display:none;fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
	.doc19 .st3{fill:#FFFFFF;}
	.doc19 .st4{font-family:'Avenir-Medium';}
	.doc19 .st5{font-size:14px;}
</style>
<g class="doc19">
<path class="st0" d="M41.2,67.8H2.8c-1.4,0-2.5-1.1-2.5-2.5V2.8c0-1.4,1.1-2.5,2.5-2.5h38.5c1.4,0,2.5,1.1,2.5,2.5v62.5
	C43.7,66.6,42.6,67.8,41.2,67.8z"/>
<g>
	<g>
		<path class="st1" d="M17.8,32.8c0,0,1.2-0.2,1.5-0.2s1.2,0.1,1.4-1.5l0-0.8c0,0,0.2-0.3,0.4-0.3c0,0,0.2-0.2,0-0.5
			c-0.2-0.3-0.6-0.3-0.1-2c0.4-1.7,0-3.4-3-4.6s-5.6,0.8-6.2,2.5c-0.6,1.6-0.8,2.8,0.8,5.1s1.5,2.5,1.4,3.6c-0.1,1.1-0.6,3.3,3.2,7
			c3.8,3.8,9.3,4.3,11.9,1.5c2.6-2.8-0.8-5.7-1.1-6.4c-0.3-0.6-1.2-1.6-0.6-3"/>
		<path class="st1" d="M27.3,31c0,0-0.5-1.3-1.5-0.5c0,0-0.4,0.3-0.4,0.6c0,0.3-0.7,0.6-1.2,0.7c-0.6,0.1-2.1,1-2.4,1.3
			c0,0-0.5-0.7-1.4-0.5"/>
		<path class="st1" d="M23.9,34.9c0,0-1.1,1.5-2.4,1.3s-2.5-1.4-3.6-1.3"/>
		<path class="st1" d="M30.5,40.4c0,0,1.3,0.8,2.8-1.6s-0.8-1.2-1.3-1.4c-0.5-0.1-0.8,0-1-2.2c-0.2-2.2-2.4-6.9-5.5-2.3
			c0,0-1,2.1,0.2,6.1"/>
		<path class="st1" d="M13.9,40.5c0,0,2.3,6.7,11,6"/>
		<path class="st2" d="M28.4,27.3c0,0-3.4,1-5-2.6s-4.2-4.9-6.3-4.1"/>
	</g>
	<path class="st1" d="M30.4,25.4c0,0-0.9,3-1.9,3.1c-1,0-1,1-1,1"/>
</g>
<text transform="matrix(1 0 0 1 6.54 61.3661)" class="st3 st4 st5">3</text>
</g>
</svg>
    
    `);

  }
}
