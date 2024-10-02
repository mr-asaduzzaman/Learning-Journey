function add(x, y) {
    const Add = x + y;
    return Add;
}
function subtract(x, y) {
    const Subtract = x - y;
    return Subtract;
}
function multiply(x, y) {
    const Multiply = x * y;
    return Multiply;
}
function devide(x, y) {
    const Devide = x / y;
    return Devide;
}



function Calculator(a, b, Operation) {
    if (Operation === 'add') {
        const Result = add(a, b);
        return Result;
    }
    else if (Operation === 'subtract') {
        const Result = subtract(a, b);
        return Result;
    }
    else if (Operation === 'multiply') {
        const Result = multiply(a, b);
        return Result;
    }
    else if (Operation === 'devide') {
        const Result = devide(a, b);
        return Result;
    }
    else {
        return "Only + - * / Operation Available now"
    }

}



const Calculate = Calculator(4, 6, 'multiply');
console.log(Calculate)