"use strict";
// class Logger {
//     constructor( public name : string) {
//         this.name = name
//     }
//     writeMessage() : void {}
// }
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}${this.lastName}`;
    }
}
const myPerson = new Person("Huxn", "Nate");
console.log(myPerson.fullName);
//# sourceMappingURL=type.js.map