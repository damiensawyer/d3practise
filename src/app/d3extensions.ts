import * as d3 from 'd3'
import { Selection } from 'd3-selection'
import { creator, BaseType } from 'd3';
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        sendMessage(...any): Selection<EnterElement, Datum, PElement, PDatum>
        makeCircle(color: string, cx: number, cy: number): Selection<EnterElement, Datum, PElement, PDatum>
        appendSVG(SVGString: string): Selection<EnterElement, Datum, PElement, PDatum>
        appendSVGFull(SVGString: string): Selection<EnterElement, Datum, PElement, PDatum>
    }
}



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

function appendSVGFull(SVGString: string) {
    return this.select(function () {
        return this.appendChild(document.importNode(new DOMParser()
            .parseFromString(SVGString, 'application/xml').documentElement, true));
    });

}

function makeCircle<EnterElement extends BaseType, Datum, PElement extends BaseType, PDatum>(color: string, cx: number, cy: number) {
    return (<Selection<EnterElement, Datum, PElement, PDatum>>this)
        .append('circle')
        .attr('fill', color)
        .attr('r', 20)
        .attr('cx', cx)
        .attr('cy', cy);
}
export class RegisterExtensions {
    constructor() {
        d3.selection.prototype.sendMessage = sendMessage;
        d3.selection.prototype.makeCircle = makeCircle;
        d3.selection.prototype.appendSVG = appendSVG;
        d3.selection.prototype.appendSVGFull = appendSVGFull;

    }
}