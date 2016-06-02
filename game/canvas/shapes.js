export function drawArc(context, radiusX, radiusY, radius, startAngle, endAngle, ccw) {
    context.beginPath();
    context.arc(radiusX, radiusY, radius, startAngle, endAngle, ccw);
    context.stroke();
}
export function drawLine(context, fromX, fromY, toX, toY) {
    context.beginPath();
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
}

export function drawGrid(context, x, y, space) {
    for (var i = 0; i < x; i += space || 10) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, y);
        context.stroke();
    }

    for (var i = 0; i < y; i += space || 10) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(x, i);
        context.stroke();
    }
}

export function drawRectangle(context, x, y, larg, long) {
    context.fillRect(x, y, larg, long)
}

export function drawCurves(context, startX, startY, x1, y1, x2, y2, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.bezierCurveTo(
        x1, y1,
        x2, y2,
        endX, endY
    );
    context.stroke();
}

/**
 * Write text at starting position x,y
 */
export function drawText(context, text, x, y) {
    context.fillText(text, x, y);
}

export function drawImage(context, image, x, y) {
    context.drawImage(image, x, y);
}

export function test() {
    console.log('shapes');
}