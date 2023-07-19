class Wall {
    constructor(x1, y1, x2, y2){
        this.start = new Vector(x1, y1)
        this.end = new Vector(x2, y2)
    }

    

    wallUnit() {
        return Vector.Sub(this.end, this.start).Unit()
    }

    show(){
        draw_line(this.start.x, this.start.y, this.end.x, this.end.y)
    }
}