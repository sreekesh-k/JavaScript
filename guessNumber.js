
let minimum = 1
let maximum = 100

let random = Math.floor(Math.random()*(maximum-minimum+1))
let running = true
let guess
let message
let attempt = 0

while(running){
    console.log(`${random}`)
    guess = window.prompt("ENTER YOUR GUESS BETWEEN " + minimum + " - " + maximum)
    if(!(isNaN(guess)) && (guess < maximum && guess > minimum) ){
        if(guess < random)
            message = "Guess Higher"
        else if(guess > random )
            message = "Guess Lower"
        else{
            message = "CORRECT YOU TOOK " + attempt + " Attempts"
            running = false
        }
        window.alert(message)
        attempt ++
    }else{
        window.alert("Enter a valid number")
    }

}