'use strict'
import * as shapes from '../canvas/shapes';
import * as canvasHelper from '../canvas/helper';
import { buttonSrcList, buttonPosList, canvaSize } from './resources-display';
import WoodProducer from '../buildings/producers/wood-producer';

var producerButtonSize = { x: 64, y: 64 };

class Button {
    constructor(size, imageSrc, displayZone) {
        this.size = size;
        this.zone = displayZone;

        this.button = new Image();
        this.button.src = imageSrc;
    }
    display(context) {
        shapes.drawImage(context, this.button, this.zone.x, this.zone.y);
    }


}

class WoodButton extends Button {
    constructor() {
        super(producerButtonSize, buttonSrcList['wood'], buttonPosList['wood']);
    }
    click(canvas) {
        canvas.addEventListener("click", mouseClickListener, false);
        function mouseClickListener(e) {
            let mouseLoc = canvasHelper.windowToCanvas(canvas, e.clientX, e.clientY);
            if ((mouseLoc.x >= buttonPosList['wood'].x && mouseLoc.x <= canvaSize.x)
                && (mouseLoc.y >= producerButtonSize.y - producerButtonSize.y && mouseLoc.y <= producerButtonSize.y)) {
                let producer = new WoodProducer();
                producer.produce();
            }
        }
    }
}

export var wButton = new WoodButton(); 