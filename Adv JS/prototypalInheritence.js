function Person(name) {
    this.name = name;
}


//ProtoTypal Inheritence -> Each objects have their hidden property that refers to another Object.
Person.prototype.Greet = function(){
    console.log(`Hello my name is ${this.name}`);
    
}

let shubham = new Person("Shubham");
shubham.Greet()