

let foods = ["Pizza", "Burger", "Dosha", "Rice"]


foods.forEach(lower)//doesnot return an array modifies the array
let newFoods = foods.map(upper)//returns an array retains the old array 


function lower(element,index,array){
    array[index] = element.toLowerCase()

}

function upper(element){
    return element.toUpperCase()

}

console.log(newFoods)
console.log(foods)