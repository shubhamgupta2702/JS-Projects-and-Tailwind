let computer = {cpu: 14};
let lenovo = {
    screen: "FHD",
    __proto__: computer,
};

console.log(lenovo.cpu);
console.log(`Lenovo`, lenovo.__proto__);


let genericCar = {tyres: 4};

let tesla = {
    driver: "AI"
};

const happy = Object.setPrototypeOf(tesla, genericCar)  // set prototype of one object to another.

const pt = Object.getPrototypeOf(tesla)
console.log(`tesla`, Object.getPrototypeOf(tesla));
console.log(happy);
console.log(pt);


