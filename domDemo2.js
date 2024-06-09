//Creating, Adding, Editing, Removing HTML Elements
//creating
const h2Basket1 = document.createElement("h2")
const h2Basket2 = document.createElement("h2")

//Adding Properties
h2Basket1.textContent = "Basket 1"
h2Basket1.id = "myh2"
h2Basket1.style.backgroundColor = "lightblue"

h2Basket2.textContent = "Basket 2"
h2Basket2.id = "myh2"
h2Basket2.style.backgroundColor = "lightblue"

//Append to DOM
// document.getElementById("container").append(h2Basket1)
document.getElementById("container").prepend(h2Basket1)

const b = document.querySelectorAll(".baskets")
document.getElementById("container").insertBefore(h2Basket2,b[1])

//remove 
document.getElementById("container").removeChild(h2Basket2)
