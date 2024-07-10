// // // // interface animal {
// // // //     name : string,
// // // //     age : number, 
// // // //     makeSound() : void; 

// // // // }

// // // // class Dog implements animal {
// // // //     constructor(name : string, age : number ) {
// // // //         this.name = name, 
// // // //         this.age = age;
// // // //     }
// // // //     makeSound() {
// // // //         console.log(`${this.name} says woof!`);
// // // //     }
// // // // }
// // // // const myDog = new Dog("Buddy", 3);
// // // // myDog.makeSound(); // Output: "Buddy says woof!"

// // // // Define the interface
// // // interface Animal {
// // //     name: string;
// // //     age: number;
// // //     makeSound(): void;
// // // }

// // // // Implement the interface in the Dog class
// // // class Dog implements Animal {
// // //     name: string;
// // //     age: number;

// // //     constructor(name: string, age: number) {
// // //         this.name = name;
// // //         this.age = age;
// // //     }

// // //     makeSound() {
// // //         console.log(`${this.name} says woof!`);
// // //     }
// // // }

// // // // Create an instance of the Dog class and use it
// // // const myDog = new Dog("Buddy", 3);
// // // myDog.makeSound(); // Output: "Buddy says woof!"


// // interface Person {
// //     name : string, 
// //     age : number, 
// //     occupation ? : string 
// // }

// // const Person1 : Person = {
// //     name : "John", 
// //     age : 40

// // } 

// // const Person2 : Person = {
// //     name : "John", 
// //     age : 40, 
// //     occupation : "Father"

// // }

// // console.log(Person1.occupation)
// // console.log(Person2.age)

// // Interfaces with functions 

// interface MathOperation {
//     (x:number, y:number) : number;
// }

// const multiply : MathOperation = (a,b) => a * b;
// console.log(multiply(3,2))

// // Interfaces with methods 

// // interface Person {
// //     firstName : string;
// //     lastName : string;
// //     age : number;
// //     sayHello() : void;

// // }
// // function greet(person : Person) {
// //     console.log(`Hello, ${person.firstName} ${person.lastName}`)
// //     person.sayHello()
// // }

// // const john : Person = {
// //     firstName : "John",
// //     lastName : "Hehe",
// //     age : 40,
// //     sayHello() {
// //         console.log(`Hi`)
// //     }
// // }

// // const nate : Person = {
// //     firstName : "Nat",
// //     lastName : "H",
// //     age : 30,
// //     sayHello() {
// //         console.log(`Hi there`)
// //     }
// // }
// // greet(john)
// // greet(nate)

// // interface song {
// //     songName : string;
// //     singerName : string;
// //     saySome(songName : string, singerName : string) :string;

// // }
// // const song1 : song = {
// //     songName : "ajie",
// //     singerName : "gaga",
// //     saySome(songName, singerName) {
// //         return `Song : ${songName} singer : ${singerName}`
// //     }
// // }
// // console.log(song1.saySome)

// interface format {
//     (x : number, y : number) :number;
// }

// let Format : format
// Format = function add (x : number, y : number) {
//     return x +y 
// }
// console.log(Format(2,3))

// Extending interfaces 

interface Man {
    c() : void
}
interface You {
    D(): void
    E() : void
}
interface hey extends  Man {
    c() : void
    A() :void


}
interface there extends Man, You {
    c() : void
    D(): void
    E() : void
}
// class interface & declaration merging 

interface Car {
    model : string, 
    year : number,
}
interface Car {
    brand : string, 
    speed : number, 
    displayInfo(): void
}

class Vehicle implements Car {
    brand : string;
    speed: number;
    model: string;
    year: number;

    constructor(brand : string, speed: number, model: string, year: number) {
        this.brand = brand,
        this.speed = speed,
        this.model = model,
        this.year = year

    }
    displayInfo(): void {
        console.log(`This ${this.brand} and ${this.speed} can be ${this.year }`)
    }
}
const newCar = new Vehicle("Toyota", 120,"sedan", 2003)
newCar.displayInfo()