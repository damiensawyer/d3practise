import { Sticker } from '../enums/sticker';
export class ChartDate {

    constructor(
        public index: number,
        public description: string,
        public sticker: Sticker
    ) {

    }
}

// Just for testing.
export class PositionedChartDate {

    constructor(
        public sticker: Sticker,
        public x: number,
        public y: number
    ) {

    }
}



