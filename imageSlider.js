

const myImages = document.querySelectorAll(".imagecontainer img")
let imageTitle = document.querySelector(".imageslider h2")
let slideIndex = 0
let initId = null

document.addEventListener("DOMContentLoaded",initializeSlider)
function initializeSlider(){
    if(myImages.length > 0){
        myImages[slideIndex].classList.add("display")
        imageTitle.textContent = `Image ${slideIndex+1}`
        initId = setInterval(next,3000)
    }
}
function next(){
    myImages[slideIndex].classList.remove("display")
    slideIndex = (slideIndex+1) % myImages.length
    myImages[slideIndex].classList.add("display")
    imageTitle.textContent = `Image ${slideIndex+1}`


}

function prev(){
    myImages[slideIndex].classList.remove("display")
    slideIndex = (slideIndex-1 + myImages.length) % myImages.length
    myImages[slideIndex].classList.add("display")
    imageTitle.textContent = `Image ${slideIndex+1}`
    clearInterval(initId)
    setTimeout(initializeSlider,3000)
}
