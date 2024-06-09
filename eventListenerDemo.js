/* eventlistener - listen to specific events 
                    click, mouseover, mouseout, keyup, keydown
                    .eventListener(event,callback) */

const myBox = document.getElementById("box")
const myMove = document.getElementById("move")

const moveSpeed = 10
let x = 50
let y = 50


myBox.addEventListener("click", (event) => {
    event.target.textContent = "Clicked"


    myMove.style.display="block"
    document.addEventListener("keydown",event =>{
        myMove.style.backgroundColor = "grey"
        if(event.key.startsWith("Arrow")){
            event.preventDefault()
            myMove.style.backgroundColor = "green"
            switch(event.key){
                case "ArrowUp":
                    y -= moveSpeed
                    break
                case "ArrowDown":
                    y += moveSpeed
                    break
                case "ArrowLeft":
                    x -= moveSpeed
                    break
                case "ArrowRight":
                    x += moveSpeed
                    break
            }
            myMove.style.top = `${y}px`
            myMove.style.left = `${x}px`
        }
    })
    document.addEventListener("keyup",event =>{
        myMove.style.backgroundColor = "red"
    })
   
});

myBox.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "2.5em"
});
myBox.addEventListener("mouseleave", event =>{
    event.target.style.fontSize = "2em"

})


