
// same as in java using static keyword in a class we can acces the property without creating
// an object of the class. A static property Belongs TO The Class.


class Printer{
    static ink = 100

    constructor(numberOfPrints){
        Printer.ink -= numberOfPrints
    }
    static inkLevel(){
        console.log(this.ink)
    }
}

const myPrinter = new Printer(10)
Printer.inkLevel()