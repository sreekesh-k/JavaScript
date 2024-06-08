//destructuring means extracting values from an array or an object and assigning it to variables.
//[] for destructuring array
//{} for destructuring objects


//simple swap
let a = 10
let b = 20;
[a, b] = [b, a]
console.log( a + " " + b)

//swap values in array
let arr = [1,2,3,4,5];
[arr[1],arr[3]] = [arr[3],arr[1]]
console.log([...arr].join(","))

//assign elements of array to variables
const [x,y,z,...rest] = arr
console.log(z)

//extract from obj
const person = {
    firstname: "Sreekesh",
    lastName: "Prabhu",
    age:22
}
const {firstname,lastName,age,job="default"} = person
console.log(firstname)

//function param 
const sayname = ({firstname,lastName,age,job="default"}) => console.log(`Name: ${firstname}, Age: ${age}`)
sayname(person)
