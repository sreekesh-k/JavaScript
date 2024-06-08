
//class - ES6 feature to replace the previous object-constructor method
class Game{
    //constructor
    constructor(name,year,catagory){
        this.name = name
        this.year = year
        this.catagory = catagory
    }
    //no need of function keyword in the class
    details(){
        console.log(`Name: ${this.name}, Year: ${this.year}, Catagory: ${this.catagory}`)
    }
}

const game1 = new Game("Valorant",2019,"Multiplayer")
const game2 = new Game("RDR2",2015,"RPG")

game1.details()
game2.details()