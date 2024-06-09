//Document Object Model - Tree structure representation of html content.
//document is an object and it has properties like document.getElementById()
console.log(document)
console.dir(document)
//Element Selectors - Manipulate html element by selection onr or more elements (From DOM)
//document.getElementById():-returns Element or NULL
const myh1 = document.getElementById("myh1")
myh1.style.backgroundColor = "grey"

//document.getElementByClassName():-HTML COLLECTION
const baskets = document.getElementsByClassName("baskets")
//convert to array to use forEach() or can use for loop with container[i]
Array.from(baskets).forEach(element => element.style.backgroundColor="green")
baskets[0].style.backgroundColor = "yellow"

//document.getElementByTagName():- HTML COLLECTION
const myh2Elements = document.getElementsByTagName("h3")
Array.from(myh2Elements).forEach(element => element.style.fontFamily= "monospace")

//document.querySelector():- FIRST ELement Or NULL
const firstBasket = document.querySelector("ul")
firstBasket.style.backgroundColor = "orange"

//document.querySelector():- NodeList
const allItems = document.querySelectorAll("li")
allItems.forEach(element => element.style.color="white")//has builtin foreach as it returns nodelist