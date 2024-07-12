
// Interface extension
interface Mammal {
    isAlive() : boolean
}

interface Reptiles extends Mammal {
    coldBlooded() : string
}

interface warmBlooded extends Reptiles{
    warmBlooded() : number
}
function myAnimal(favorite :warmBlooded ) {
    favorite.coldBlooded()
    favorite.isAlive()
}

interface Child {
    isAlive() : boolean
}

interface Adult {
    coldBlooded() : string
}

interface warmBlooded extends Adult, Child{
    warmBlooded() : number
}
function myPeople(favorite :warmBlooded ) {
    favorite.coldBlooded()
    favorite.isAlive()
}
