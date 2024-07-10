// class Logger {
//     constructor( public name : string) {
//         this.name = name
//     }
//     writeMessage() : void {}
// }

class Person {
    constructor(public firstName : string, public lastName : string) {
        
    }
    get fullName() : string{
        return `${this.firstName}${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName : string, lastName : string, public salary : number) {
        super(firstName,lastName)
        this.salary = salary
    }
}
const myPerson = new Person("Huxn", "Nate")
// console.log(myPerson.fullName)


type Titles = {
    name : string;
    firstName : string,
    lastName : string;
}