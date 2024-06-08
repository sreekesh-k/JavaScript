
function roll(){

const numberOfDice = document.getElementById("numOfDice").value
const head = document.getElementById("head")
const result = document.getElementById("result")

let dicevalues = []
let msg = []
let sum = 0

for(let i = 0; i < numberOfDice; i++){
    let value = Math.floor(Math.random()*6)+1
    sum += value
    dicevalues.push(value)
    msg.push(`<p>${value} on dice ${i+1}</p>`)
}
msg.push(`<p>Total = ${sum}</p>`)

head.textContent = `Dice: ${dicevalues.join(', ')}`
result.innerHTML = msg.join("")




}