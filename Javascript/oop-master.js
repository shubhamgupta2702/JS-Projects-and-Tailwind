let car = {
    make: "Toyota",
    model: "camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start());
console.log(car.start);


function Person(name, age){
    this.name= name
    this.age = age
}

let john = new Person("John Ji" , 21)
console.log(john);
console.log(john.name);
// console.log(john.name()); john is not a function



function Dish(dish){
    this.dish = dish
}

Dish.prototype.cholaBhatura = function(){
    return `${this.dish} is best one in BSB`
}

Dish.prototype.shubham = function(){
    return `Shubham loves to eat ${this.dish}`
}

let Shubham = new Dish("Shubham")

console.log(Shubham.cholaBhatura());



// Encapsulation

class BankAccount{
    #balance = 0;
    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return`$ ${this.#balance}`
    }

}

let balancePrint = new BankAccount;
console.log(balancePrint.getBalance());


// ABSTRACTION

class coffeeMachine {
    start(){
        //call DB
        //Filter Value

        return `Starting the Machine`
    }
    brewCoffee(){
        //complex calculation
        return `Brewing Coffee`
    }

    pressStartButton(){
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1} + ${msg2}`
    }
}

let myMachine = new coffeeMachine()
console.log(myMachine);
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism 

class Bird{
    fly(){
        return `Flying....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());




class Calculator {
     static add(a, b){
        return a+b;
    }
}

let minicalc = new Calculator()
console.log(minicalc.add(2,3));  // error - Static keyword never allows to use that.
console.log(Calculator.add(2, 5));
