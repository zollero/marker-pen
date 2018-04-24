
interface MarkerPenOptions {
    el: HTMLElement
}

export default class MarkerPen {
    el: HTMLElement;
    context: CanvasRenderingContext2D;
    options: MarkerPenOptions;
    constructor(el: HTMLElement, options?: MarkerPenOptions) {
        this.el = el;
        this.options = options;
        this.init()
    }

    init() {
        const paintContainer = document.createElement('canvas')
        this.el.style.position = 'relative'
        paintContainer.width = 200
        paintContainer.height = 400
        paintContainer.style.position = 'absolute'
        paintContainer.style.top = '0px'
        paintContainer.style.bottom = '0px'
        paintContainer.style.left = '0px'
        paintContainer.style.right = '0px'

        this.context = paintContainer.getContext('2d')

        this.el.appendChild(paintContainer)
        
        this.testPaint()
    }

    testPaint(x?: number, y?: number) {
        this.context.strokeStyle = 'red'
        this.context.beginPath()
        this.context.moveTo(20, 20)
        this.context.lineTo(50, 50)
        
        this.context.stroke()
    }

    paint(x: number, y: number) {
        console.log('x: ', x, 'y: ', y)
    }
}