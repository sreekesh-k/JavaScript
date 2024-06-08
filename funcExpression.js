
//functions can be used as an expressions
const hello = function (){
    console.log("hello")
}
hello()

setTimeout(function (){
    console.log("After 3 seconds")
},3000)


let array = [7,9,5,8,3,1,4]
array.sort()
const square = array.map(function(element){
    return Math.pow(element,2)
})

const even = array.filter(function(element){
    return element%2===0
})

const total = array.reduce(function(accumulator,element){
    return accumulator + element
})

console.log(total)
console.log(square)
console.log(even)