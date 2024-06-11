// promise are objects that asynchronous operations
// wrap async codes with promise object to avoid call back hells
// new Promise((resolve,reject)=>{async code})

const wokeUp = true
const wentToCollege = true
const studying = true

function wakeUp(){
   return new Promise((resolve,reject)=>
        setTimeout(()=>
            {
                if(wokeUp) resolve("Went to College")
                else reject("You dint wake up")

            },1800)
    )
}

function goToCollege(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(wentToCollege) resolve("You are in The college")
            else reject("You could go to college")
        },600)
    })
}

function study(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(studying) resolve("You finished studying")
            else reject("You didnt study anything")
        },1200)
    })

}

wakeUp()
    .then(value => {
        console.log(value);
        return goToCollege();
    })
    .then(value => {
        console.log(value);
        return study();
    })
    .then(value => {
        console.log(value);
        console.log("Good Work!!");
    })
    .catch(error => {
        console.error(error);
    })