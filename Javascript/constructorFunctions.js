function Person(name, age){
    this.name = name;
    this.age = age;
}

function car(make,model){
    this.make = make;
    this.model = model;
}

let myCar = new car("Toyota" , "Camry")
console.log(myCar);

let Mycar2 = car("Tata" , "Safari")
console.log(Mycar2);    // Undefined


function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon Tea")
console.log(lemonTea);
console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}

// Making a Custom prototype!
Animal.prototype.sound = function (){
    return `${this.species} makes a sound`;
}

let dog = new Animal("DOG")
console.log(dog);
console.log(dog.sound());

let cat = new Animal("Cat")
console.log(cat.sound());

function Laptop(processor){
    this.processor = processor

}

Laptop.prototype.performance = function(){
    return  `${this.processor} laptop is good for coding`
}

let i5 = new Laptop("i5")  // new keyword gives instance of new Object
console.log(i5);
console.log(i5.performance());
 
function Lunch(name){
    if (!new.target)  // The new.target meta-property lets you detect whether a function or constructor was called using the new operator
        {
        throw new Error("Khana Must Contain new Keyword ");
    }
    this.name = name
}

let Dalchawal = new Lunch("Dal Chawal")
let CholuBholu = Lunch("Cholu Bholu")  // throw an ERROR

console.log(CholuBholu);
