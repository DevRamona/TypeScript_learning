type Circle = {
    radius : string,
    kind : "circle"
}
type Square = {
    sideLength : number,
    kind : "square"
}
type Triangle =  {
    sideWidth : number,
    kind : "triangle"
}
type Shape = Circle | Square

function area (shape : Shape) {
    switch(shape.kind) {
        case "circle" : 
    console.log(`This is ${shape.kind}`)
     
    case "square" :
        console.log(`Hey ${shape.kind} `)

    }
    
}
const parrot : Circle = {
    radius : "hi",
    kind : "circle"
}
console.log(area(parrot))
