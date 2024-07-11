// Normal generics 
// function myFunc <T> (name : T) : T {
//     return name

// }

// const Func = <number> (42)

// Generics with arrays 

// function myArray <T> (char : T[]) : void {
//     char.forEach(a => console.log(a))

// }

// const newArr = myArray<number>([1, 2, 3])
// console.log(newArr)

// Generics with classes 

// // 
// class Car {
//     private name : string;
//     constructor(name : string) {
//         this.name = name
//     }
//     public getName() : string {
//         return this.name
//     }
// }
// const myCar = new Car("Haya")
// console.log(myCar.getName())

const numStr : string = "42"
const newNum : number = parseFloat(numStr)
console.log(newNum)