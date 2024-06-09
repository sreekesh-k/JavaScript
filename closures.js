
// function inside function, inner function has access to variables of outer func
// maintain state of vatiables
function counter(){

    let count = 0
    function increaseCounter(){
        count ++
    }
    function decreaseCounter(){
        count --
    }
    function getCount(){
        console.log(count)
    }

    return {increaseCounter,decreaseCounter,getCount}
}

const accessCount = new counter()
accessCount.increaseCounter()
accessCount.getCount()
