import * as d3 from 'd3'
import { Selection } from 'd3-selection'
import { creator, BaseType, AxisScale } from 'd3';
import { PositinedChartDate } from './classes/chart-date';
import { Sticker } from './enums/sticker';
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        sendMessage(...any): CustomSelection
        makePositionedCircle<cs extends CustomSelection>(xScale: AxisScale<number>, yScale: AxisScale<number>, x: number, y: number, fill: string): CustomSelection
        appendSVG(SVGString: string): Selection<EnterElement, Datum, PElement, PDatum>
        makePositionedSVG(SVGString: string, xScale: AxisScale<number>, yScale: AxisScale<number>, x: number, y: number): CustomSelection
        drawSticker(xScale: AxisScale<number>, yScale: AxisScale<number>, x: number, y: number, stickerNumber: number): CustomSelection,
        processSticker(xScale: AxisScale<number>, yScale: AxisScale<number>): CustomSelection
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

function makePositionedSVG(SVGString: string,
    xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    x: number,
    y: number) {
    return (<CustomSelection>this)
        .append('g').html(SVGString)
        .attr("transform", "translate(" + xScale(x) + "," + yScale(y) + ")"); // fix this https://stackoverflow.com/a/479643
}

function drawSticker(xScale: AxisScale<number>,
    yScale: AxisScale<number>,
    x: number,
    y: number,
    stickerNumber: number) {
    let href = '';
    switch (stickerNumber) {
        case 2:
            href = '02-Spotting.svg'; break;
        case 14:
            href = '14-Peak1.svg'; break;
        case 19:
            href = '19-PossiblyFertile3.svg'; break;
        default:
            href = '02-Spotting.svg'; break;
    }

    return (<CustomSelection>this)
        .append('image')
        //.attr('width', '50')
        .attr('height', '100')
        //.attr('xlink:href', '../../assets/doctored_set/' + href)
        .attr('xlink:href', '../../assets/Set3/' + href)
        //.attr("transform", "scale(0.5)") // this didn't seem to work...but setting width OR height did.
        .attr("transform", "translate(" + xScale(x) + "," + yScale(y) + ")"); // fix this https://stackoverflow.com/a/479643
}

function processSticker(xScale: AxisScale<number>, yScale: AxisScale<number>) {

    var svgFileName = (stickerNumber: number): string => {
        var href = '';
        switch (stickerNumber) {
            case 2:
                href = '02-Spotting.svg'; break;
            case 14:
                href = '14-Peak1.svg'; break;
            case 19:
                href = '19-PossiblyFertile3.svg'; break;
            default:
                href = '02-Spotting.svg'; break;
        }
        return href;
    }


    return (<CustomSelection>this)
        .append('image')
        .attr('height', '100')
        //.attr('xlink:href', '../../assets/doctored_set/' + href)
        .attr('xlink:href', (d: PositinedChartDate, i) => '../../assets/Set3/' + svgFileName(d.sticker))
        //.attr("transform", "scale(0.5)") // this didn't seem to work...but setting width OR height did.
        .attr("transform", (d: PositinedChartDate, i) => "translate(" + xScale(d.x) + "," + yScale(d.y) + ")"); // fix this https://stackoverflow.com/a/479643
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

// function makePositionedSVG<cs extends CustomSelection>(
//     xScale: AxisScale<number>,
//     yScale: AxisScale<number>,
//     x: number,
//     y: number,
//     SVGString: string) {
//     return this.select(function () {
//         return this.appendChild(document.importNode(new DOMParser()
//             .parseFromString(SVGString, 'application/xml').documentElement, true));
//     });
// }
export class RegisterExtensions {

    public GetData(version: number): PositinedChartDate[] {
        switch (version) {
            case 1:
                return [new PositinedChartDate(Sticker.Spotting_02, 10, 150)];

            case 2:
                return [
                    new PositinedChartDate(Sticker.Peak1_14, 10, 250),
                    new PositinedChartDate(Sticker.Spotting_02, 59, 400),
                    new PositinedChartDate(Sticker.PossiblyFertile3_19, 59, 250)
                ];

        }
    }

    constructor() {
        d3.selection.prototype.sendMessage = sendMessage;
        d3.selection.prototype.appendSVG = appendSVG;
        //d3.selection.prototype.appendSVGFull = appendSVGFull;
        d3.selection.prototype.makePositionedCircle = makePositionedCircle;
        d3.selection.prototype.makePositionedSVG = makePositionedSVG;
        d3.selection.prototype.drawSticker = drawSticker;
        d3.selection.prototype.processSticker = processSticker;

    }
}