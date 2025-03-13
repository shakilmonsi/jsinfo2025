// Abstract class Shape
class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

// Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Create instance of Circle
const myCircle = new Circle(5);
console.log(myCircle.calculateArea());