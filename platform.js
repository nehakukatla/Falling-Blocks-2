class Platform {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 175;
        this.height = 40;
        this.image = loadImage("platform.png");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        this.body.position.x = mouseX
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}