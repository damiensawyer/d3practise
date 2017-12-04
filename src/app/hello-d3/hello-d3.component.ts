import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "app-hello-d3",
  templateUrl: "hello-d3.html"
})
export class HelloD3Component {

  constructor() {
    d3.select("p").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
    d3.select("p").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "blue");
    d3.select("p").append("svg").append("rect").attr("width", 125).attr("height", 750).style("fill", "red");
  }
}
