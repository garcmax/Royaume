'use strict'
import 'babel-polyfill';
import {res} from './player/resources';
import * as shapes from './canvas/shapes';
import * as ui from './ui/resources-display';
import * as button from './ui/resources-button';

window.onload = function() {
    var canvas = document.getElementById("gameCanvas");
    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var context = canvas.getContext("2d");
    if (!context) {
        alert("Impossible de récupérer le context");
        return;
    }

    setInterval(drawUi, 1000 / 60);    

    function drawUi() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ui.displayResources(context);
        button.wButton.display(context);
    }
    button.wButton.click(canvas);
}