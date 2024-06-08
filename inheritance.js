

class Animal{
    walk(){
        console.log(`${this.name} is walking`)
    }
}

class Lion extends Animal{
    name = "Lion"
    roar(){
        console.log("Roaring")
    }
}

class Dog extends Animal{
    name = "Dog"
    bark(){
        console.log("Barking")
    }
}

const lion  =  new Lion();
lion.walk()