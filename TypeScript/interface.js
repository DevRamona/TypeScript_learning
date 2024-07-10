"use strict";
// // // // interface animal {
// // // //     name : string,
// // // //     age : number, 
// // // //     makeSound() : void; 
class Vehicle {
    constructor(brand, speed, model, year) {
        this.brand = brand,
            this.speed = speed,
            this.model = model,
            this.year = year;
    }
    displayInfo() {
        console.log(`This ${this.brand} and ${this.speed} can be ${this.year}`);
    }
}
const newCar = new Vehicle("Toyota", 120, "sedan", 2003);
newCar.displayInfo();
//# sourceMappingURL=interface.js.map