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
  sticker: string = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 44 68" style="enable-background:new 0 0 44 68;" xml:space="preserve">
<style type="text/css">
	.doc2 .st0{fill:#E24D4D;stroke:#B72525;stroke-width:0.5;stroke-miterlimit:10;}
	.doc2 .st1{fill:none;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}
	.doc2 .st2{fill:#FFFFFF;}
	.doc2 .st3{opacity:0.29;fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
</style>
<g class="doc2">
<path class="st0" d="M41.2,67.8H2.7c-1.4,0-2.5-1.1-2.5-2.5V2.8c0-1.4,1.1-2.5,2.5-2.5h38.5c1.4,0,2.5,1.1,2.5,2.5v62.5
	C43.8,66.6,42.6,67.8,41.2,67.8z"/>
<g>
	<g>
		<circle class="st1" cx="15.5" cy="15" r="4.5"/>
		<circle class="st2" cx="15.5" cy="15" r="2.5"/>
	</g>
	<g>
		<g>
			<circle class="st1" cx="29.5" cy="34" r="4.5"/>
			<circle class="st2" cx="29.5" cy="34" r="2.5"/>
		</g>
	</g>
	<g>
		<g>
			<circle class="st1" cx="16.5" cy="51" r="4.5"/>
			<circle class="st2" cx="16.5" cy="51" r="2.5"/>
		</g>
	</g>
</g>
<line class="st3" x1="21" y1="45" x2="25" y2="40"/>
<line class="st3" x1="20.5" y1="21.5" x2="24.5" y2="26.5"/>
</g>
</svg>`;
  data: number[];
  w: 1000;
  h: 500;
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
    // svg.makeCircle('green', 250, 80)
    //   .sendMessage()
    //   .sendMessage();

    // svg.appendSVG('<circle class="circle2" cx="20" cy="20" r="20"></circle>');
    svg.appendSVG('<g><rect width="300" fill="purple" height="30"></rect></g>');
    // svg.appendSVG('<rect width="400" fill="yellow" height="30"></rect>');
    svg
      .appendSVGFull(this.sticker)
      .attr("transform", "translate(" + (500) + ",0)"); // This isn't moving. I think that I Have to remove the svg, put the classes in a namespace, just have the <g> then positioni that. 

  }
}
