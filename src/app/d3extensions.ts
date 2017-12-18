import * as d3 from 'd3'
import { Selection } from 'd3-selection'

declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        sendMessage(...any): Selection<EnterElement, Datum, PElement, PDatum>
        makeCircle(): Selection<EnterElement, Datum, PElement, PDatum>
    }
}

function sendMessage(source) {
    return this.each(function () {
        console.log(source, 'Damien, MESSAGE coffee on you!');
        //this.parentNode.appendChild(this);
    });



}

function makeCircle() {
    console.log('circle');
}
export class RegisterExtensions {
    constructor() {
        d3.selection.prototype.sendMessage = sendMessage;
        d3.selection.prototype.makeCircle = makeCircle;
    }
}