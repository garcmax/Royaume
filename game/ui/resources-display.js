'use strict'

import {res} from '../player/resources';
import * as shapes from '../canvas/shapes';

export function displayResources(context) {
    context.font = "10px calibri";
    shapes.drawText(context, 'wood : ', 10, 15);
    shapes.drawText(context, res['wood'], 40, 15);
}

export let canvaSize = {
    x: 1280,
    y: 720
}

export let buttonSrcList = {
    'wood' : './images/wood.png'
}

export let buttonPosList = {
    'wood' : { x: canvaSize.x - 64, y: 0 }
}