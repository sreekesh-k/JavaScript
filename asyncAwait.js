//Async - makes a function return a promise
//Await - makes an Async function wait for a promise


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

async function startDay(){
    try {
        const wakeUpResult = await wakeUp()
        console.log(wakeUpResult)

        const collegeResult = await goToCollege()
        console.log(collegeResult)

        const studyResult = await study()
        console.log(studyResult)
    } catch (error) {
        console.error(error)
    }
}

startDay()