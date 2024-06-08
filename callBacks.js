

add(displayConsole,1,2)

function add(callback,a,b){
    let result = a + b
    callback(result)
}

function displayConsole(result){
    console.log(result)
}