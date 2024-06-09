

//classList allows interaction with list of css classes, allows to make reusable classes
//add(), remove(), toggle(), replace(), contains()



const myButton = document.getElementById("mybtn")

myButton.addEventListener("mouseover",event=>{
    event.target.classList.add("hover")
})
myButton.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover")
    // event.target.classList.toggle("hover")
})

myButton.addEventListener("click",event=>{
    if(event.target.classList.contains("clicked")){
        event.target.classList.replace("clicked","buttons")
    // event.target.classList.toggle("clicked")
    }else{
        event.target.classList.replace("buttons","clicked")
    // event.target.classList.toggle("clicked")
    }
})