import * as d3 from 'd3'
import { Selection } from 'd3-selection'

declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        makeCircle(): Selection<EnterElement, Datum, PElement, PDatum>
        higuys();
    }
}

export function makeCircle() {
    console.log('Damien, coffee on you!');
}

d3.selection.prototype.makeCircle = makeCircle;