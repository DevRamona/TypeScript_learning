// // // Type assertion using the tags 
// // let code : any = 123
// // let employeeCode = <number> code
// // console.log(typeof(employeeCode))


// // function myFunc(name : string) : void {
     

// // }
// // myFunc("Hello")

// // const hero : string = "Hello"
// // let nun : never


// // Using the as keyword 
// const cup : unknown = 124;
// const employeeCup = (cup as string).toString().length
// console.log(employeeCup)


let someValue: unknown = "hello";
let strLength1: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

console.log(strLength1); // Output: 5 (length of "hello")
console.log(strLength2); // Output: 5 (length of "hello")



