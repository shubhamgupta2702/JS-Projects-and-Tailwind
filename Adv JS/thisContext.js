const person = {
    name: "Shubham",
    greet(){
        console.log(`Hi I am ${this.name}`);
        
    }
}

person.greet() // this gives current Context.

const GreetFunction = person.greet()
console.log(GreetFunction);

