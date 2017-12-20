import * as d3 from 'd3'
import { Selection } from 'd3-selection'
import { creator, BaseType, AxisScale } from 'd3';
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        sendMessage(...any): Selection<EnterElement, Datum, PElement, PDatum>
        makePositionedCircle<cs extends CustomSelection>(
            xScale: AxisScale<number>,
            yScale: AxisScale<number>,
            x: number,
            y: number,
            fill: string): CustomSelection
        makePositionedSVG<cs extends CustomSelection>(
            xScale: AxisScale<number>,
            yScale: AxisScale<number>,
            x: number,
            y: number,
            SVGString: string): CustomSelection
        appendSVG(SVGString: string): Selection<EnterElement, Datum, PElement, PDatum>
        appendSVGFull(SVGString: string, xScale: AxisScale<number>,
            yScale: AxisScale<number>,
            x: number,
            y: number): Selection<EnterElement, Datum, PElement, PDatum>
    }
}

export type CustomSelection = Selection<BaseType, any, BaseType, any>

function sendMessage(source) {
    return this.each(function () {
        console.log(this, 'Damien, MESSAGE coffee on you!');
        //this.parentNode.appendChild(this);
    });
}

function appendSVG(SVGString: string) {
    return this.select(function () {
        return this.appendChild(document.importNode(new DOMParser()
            .parseFromString('<svg xmlns="http://www.w3.org/2000/svg">' + SVGString + '</svg>', 'application/xml').documentElement.firstChild, true));
    });

}

function appendSVGFull(SVGString: string,
    xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    x: number,
    y: number) {
    return (<CustomSelection>this)
        .append('g').html(SVGString)
        .attr("transform", "translate(" + xScale(x) + "," + yScale(y) + ")");;
}

function makePositionedCircle<cs extends CustomSelection>(
    xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    x: number,
    y: number,
    fill: string) {
    return (<cs>this)
        .append('circle')
        .attr('fill', fill)
        .attr('r', 20)
        .attr('cx', xScale(x))
        .attr('cy', yScale(y));
}

function makePositionedSVG<cs extends CustomSelection>(
    xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    x: number,
    y: number,
    SVGString: string) {
    return this.select(function () {
        return this.appendChild(document.importNode(new DOMParser()
            .parseFromString(SVGString, 'application/xml').documentElement, true));
    });
}

export class RegisterExtensions {
    constructor() {
        d3.selection.prototype.sendMessage = sendMessage;
        d3.selection.prototype.appendSVG = appendSVG;
        d3.selection.prototype.appendSVGFull = appendSVGFull;
        d3.selection.prototype.makePositionedCircle = makePositionedCircle;
        d3.selection.prototype.makePositionedSVG = makePositionedSVG;

    }
}