// // function add(a: string | number, b: string | number) {
// //     if(typeof a === "number" && typeof b === "number") {
// //         return a +b ;
// //     }
// //     if(typeof a === "string" && typeof b === "string") {
// //         return a.concat(b);
// //     }
// //     throw new Error('Parameters must either be numbers or strings')
// // }
// // console.log(add(1, 2));
// // console.log(add("hello", "world")); 


// function kgToLbs(weight : number | string): number {
//     if(typeof weight === "number") {
//       return weight * 2.2;

//     } else {
//         return parseInt(weight) *2.2
//     }

// }
// console.log(kgToLbs(10))
// // console.log(kgToLbs("10"))

function myFunc(name:string): never {
    throw new Error(`Failed`)
}
myFunc("Ramona")
