
const hello = (name)=> console.log(`Hello ${name}`)
hello("Sreekesh")


setTimeout(()=>{
    console.log("2 statements")
    console.log("2secs later")
},2000)


const array = [1,2,3,4,5]
const squares = array.map((element)=> Math.pow(element,2))

console.log(squares)