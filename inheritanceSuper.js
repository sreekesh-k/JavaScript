
//inheritance and super keyword
class Animal{
    constructor(name,age){
        this.name = name
        this.adge = age
    }
    walk(){
        console.log(`${this.name} is walking`)
    }
    features(){
        console.log(`Features: ${this.features}`)
    }
}

class Lion extends Animal{
    constructor(name,age,features){
        super(name,age)
        this.features = features
    }
    roar(){
        console.log("Roaring")
        super.features()
    }
}

class Cat extends Animal{
    constructor(name,age,features){
        super(name,age)
        this.features = features
    }
    meow(){
        console.log("meowing")
        super.features()
    }
}

const lion  =  new Lion("Lion",20,"Thick Fur");
lion.roar()
const cat  =  new Cat("Cat",12,"Small Paws");
cat.meow()