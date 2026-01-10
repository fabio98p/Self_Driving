class Road{
    constructor(x, width, laneCount = 3){
        this.x = x
        this.width = width
        this.laneCount = laneCount

        this.left = x - width / 2
        this.right = x + width / 2

        const inifnity = 1000000
        this.top = -inifnity
        this.bottom = inifnity
    }

    draw(ctx){
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"

        for (let i = 0; i <= this.laneCount; i++) {
            const x = leap(
                this.left,
                this.right,
                i/this.laneCount
            )
            ctx.beginPath()
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom)
            ctx.stroke()
        }

    }
}
