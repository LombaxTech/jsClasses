// ? Classes lead to the creation of objects which have properties and methods

class Rectangle {
    //* this gets run only once at the beginning 
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.colour = _color;
    }

    // * define methods as following
    getArea = () => {
        return this.width * this.height;
    }

    // * or like this without arrow syntax
    printDescription() {
        console.log(`I am a rectangle of area ${this.getArea()}`);
    }
}

let firstRec = new Rectangle(10, 10, 'blue');
let secondRec = new Rectangle(20, 20, 'red');
let thirdRec = new Rectangle();

// ? GETTERS AND SETTERS 
// * Way of creating methods to use like properties 

class Square {
    constructor(_side) {
        this.width = _side;
        this.height = _side;
        this.noOfRequestsForArea = 0;
    }

    get area() {
        this.noOfRequestsForArea++;
        return this.width * this.height;
    }

    // set area(area) {
    //     this.width = Math.sqrt(area);
    //     this.height = this.width;
    // }

    // ! THE OTHER PROPERTIES WILL CHANGE AFTER USING A SETTER
    set perimeter(perimeter) {
        this.width = perimeter / 4;
        this.height = this.width;
    }
}


