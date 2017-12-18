import * as d3 from 'd3'
import { Selection } from 'd3-selection'
import { creator, BaseType } from 'd3';
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        sendMessage(...any): Selection<EnterElement, Datum, PElement, PDatum>
        makeCircle(): Selection<EnterElement, Datum, PElement, PDatum>
    }
}



function sendMessage(source) {
    return this.each(function () {
        console.log(this, 'Damien, MESSAGE coffee on you!');
        //this.parentNode.appendChild(this);
    });
}

function makeCircle<EnterElement extends BaseType, Datum, PElement extends BaseType, PDatum>() {
    var color = 'pink';
    return (<Selection<EnterElement, Datum, PElement, PDatum>>this)
        .append('circle')
        .attr('fill', color)
        .attr('r', 20)
        .attr('cx', 200)
        .attr('cy', 100);
}
export class RegisterExtensions {
    constructor() {
        d3.selection.prototype.sendMessage = sendMessage;
        d3.selection.prototype.makeCircle = makeCircle;
    }
}