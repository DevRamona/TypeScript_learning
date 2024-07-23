// // // class Person {
// // //     ssn : string = ""
// // //     firstName : string = '' 
// // //     lastName : string = ""

// // //     constructor(ssn : string, firstName : string, lastName : string) {
// // //         this.ssn = ssn, 
// // //         this.firstName = firstName, 
// // //         this.lastName = lastName;

// // //     }

// // //     getFullName() : string {
// // //         return `${this.firstName} ${this.lastName}`
// // //     }
// // // }
// // // const person = new Person("2833", "John", "Doe")
// // // console.log(person)

// // type stringOrNumber = string | number;
// // let message : newString;
// // // message = 234
// // message = "Hello"


// // console.log(message)


// export function persistence(num: number): number {
   
//     let result = 0
//      let numberToString :string = num.toString()
//      while(numberToString.length > 1) {
//        numberToString = String([...numberToString].reduce((a : string,b : string) => a * b))
//        result++
         
         
//      }
//      return result
//   }

export function scramble(str1: string, str2: string): boolean {
  const splitString1 = str1.split("")
//  const splitString2 = str2.split("")
  
  for(let a = 0; a <splitString1.length; a++) {
    if(str2.includes(splitString1[a])) {
      return true
    } else {
      return false
    }
    
  }
 return false
}