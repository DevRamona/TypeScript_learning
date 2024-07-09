// interface animal {
//     name : string,
//     age : number, 
//     makeSound() : void; 

// }

// class Dog implements animal {
//     constructor(name : string, age : number ) {
//         this.name = name, 
//         this.age = age;
//     }
//     makeSound() {
//         console.log(`${this.name} says woof!`);
//     }
// }
// const myDog = new Dog("Buddy", 3);
// myDog.makeSound(); // Output: "Buddy says woof!"

// Define the interface
interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}

// Implement the interface in the Dog class
class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log(`${this.name} says woof!`);
    }
}

// Create an instance of the Dog class and use it
const myDog = new Dog("Buddy", 3);
myDog.makeSound(); // Output: "Buddy says woof!"

