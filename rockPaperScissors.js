

const computerChoices = ['rock', 'paper', 'scissor']
const pc = document.getElementById("playerChoice")
const cc = document.getElementById("computerChoice")
const ps = document.getElementById("playerScore")
const cs = document.getElementById("computerScore")
const sts = document.getElementById("sts")

let computerScore = 0
let playerScore = 0
let result = null
function startPlay(playerChoice){
    sts.classList.remove("red","green")
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)]
    pc.textContent = `PlayerChoice: ${playerChoice}`
    cc.textContent = `ComputerChoice: ${computerChoice}`
    if(playerChoice == computerChoice){
        sts.textContent = "IT'S A TIE"           
    }else{
        switch(computerChoice){
            case 'rock':
                result = playerChoice=='paper'?"You Win":"You Lose"
                break
            case 'paper':
                result = playerChoice=='scissor'?"You Win":"You Lose"
                break
            case 'scissor':
                result = playerChoice=='rock'?"You Win":"You Lose"
                break
        }
        sts.textContent = result
        if(result === "You Win") {
            playerScore ++
            sts.classList.add("green")
            ps.textContent = `PlayerScore: ${playerScore}`
        }
        else{
            computerScore ++
            sts.classList.add("red")
            cs.textContent = `ComputerScore: ${computerScore}`
        }  

    }
        
        
}