type user = {
    name : string, 
    age : number, 
    occupation ? : string
}

type Bird = {
    fly : () => void
}
type Fish = {
    swim : () => void
}

type Pet = Bird | Fish

type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Tuesday"

let value : unknown = "a"

console.log(value.toUpperCase())