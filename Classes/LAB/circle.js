class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }

    get diameter () {
        return 2 * this.radius;
    }

    set diameter (diameter) {
        this.radius = diameter / 2;
    }

    get area () {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);
