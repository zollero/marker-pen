var MarkerPen = (function () {
    'use strict';

    var MarkerPen = (function () {
        function MarkerPen(el, options) {
            this.el = el;
            this.options = options;
            this.init();
        }
        MarkerPen.prototype.init = function () {
            var paintContainer = document.createElement('canvas');
            this.el.style.position = 'relative';
            paintContainer.width = 200;
            paintContainer.height = 400;
            paintContainer.style.position = 'absolute';
            paintContainer.style.top = '0px';
            paintContainer.style.bottom = '0px';
            paintContainer.style.left = '0px';
            paintContainer.style.right = '0px';
            this.context = paintContainer.getContext('2d');
            this.el.appendChild(paintContainer);
            this.testPaint();
        };
        MarkerPen.prototype.testPaint = function (x, y) {
            this.context.strokeStyle = 'red';
            this.context.beginPath();
            this.context.moveTo(20, 20);
            this.context.lineTo(50, 50);
            this.context.stroke();
        };
        MarkerPen.prototype.paint = function (x, y) {
            console.log('x: ', x, 'y: ', y);
        };
        return MarkerPen;
    }());

    return MarkerPen;

}());
