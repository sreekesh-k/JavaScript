
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

//nested objects
const student = {
    firstname: "Sreekesh",
    lastName: "Prabhu",
    age: 22,
    address:{
        district: "Ernakulam",
        state: "Kerala",
        country:"India"
    },
    sayName: function(){ console.log(this.firstname)} // cant use the arrow for this, it will then refer to the document(window)
}

console.log(student.address.country)