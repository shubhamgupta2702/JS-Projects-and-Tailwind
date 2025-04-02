//First Question
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

const teaOrder = makeTea("Masala tea")
console.log(teaOrder);

// Question 2

function orderTea(teaType){
    function confirmOrder(){
        return 'Order Confirmed for Chai'
    }
     return confirmOrder()
}
const OrderChai = orderTea("15 wali Chai");
console.log(OrderChai);

//Question 3

const calculateTotal = (price, quantity) => {
    return price * quantity
}

const totalCost = calculateTotal(15,15)
console.log(totalCost);


// Question 4

function makeTea(typeOfTea){
    return `This is make Tea`
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}
const order = processTeaOrder(makeTea)
console.log(order);


// Question 5

function createTeaMaker(tea){
    return function (teaType){
        return `Making ${teaType} ${tea}`
    }
}
let teaMaker = createTeaMaker("shubham")
console.log(teaMaker("green tea"));
