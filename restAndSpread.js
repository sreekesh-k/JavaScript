

const total  =  getTotal(1,2,3,4,5)
const fullname = fullName("Sreekesh", "K", "Prabhu")

//...in function parameter converts into array : resting
//... in array spreads the array into different elements

function getTotal(...numbers){

    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}

function fullName(...names){
    return names.join(" ")
}

function dispArray(){
    let fruits = ["Apple","Mango","Orange"]
    console.log(...fruits)
    let vegetables = ["Potato","Cabbage","Carrot"]
    console.log(...vegetables)

    let foods = [...fruits,...vegetables,"Pizza"]//conbine arrays
    console.log(foods)
    
    let name = "Sreekesh"
    let letters  = [...name].join("-")//get lettes of string
    console.log(letters)

    let numbers = [1,7,9,5,3,4,6]
    let max = Math.max(...numbers)//find max
    console.log(max)
}

console.log(total)
console.log(fullname)
dispArray()
