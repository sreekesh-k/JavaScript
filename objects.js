
const person = {
    firstname: "Sreekesh",
    lastName: "Prabhu",
    sayName: function(){ console.log(this.firstname)} // cant use the arrow for this, it will then refer to the document(window)
}
const game = {
    name : "Valorant",
    play : (person) => console.log(`${person.firstname} is playing ${game.name}`)
}

person.sayName()
game.play(person)