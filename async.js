
//synchronous -  line by line execution, sequencial, consecutive
//asynchronous - multiple operations running concurently without waiting.
//               doesnot block the excecution flow.
//               (IO operation, Network, Fetching data)
//               Handled with Callbacks, async/await & promises



//callbacks
function func1(callback){
    setTimeout(()=>{
        console.log(1)
        callback()
    },3000)
}
function func2(){
    console.log(2)
    console.log(3)
    console.log(4)
}
func1(func2)

