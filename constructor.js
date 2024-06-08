

function Game(name,year,catagory){

    this.name = name,
    this.year = year,
    this.catagory = catagory
    this.details = function(){console.log(`Name: ${name}, Year: ${year}, Catagory: ${catagory}`)}
}

const game1 = new Game("Valorant",2019,"Multiplayer")
const game2 = new Game("RDR2",2015,"RPG")

game1.details()
game2.details()