//  Regular Function

function add(a, b) {
    const sum = a + b
    return sum;
}
const Addition = add(2, 4)
console.log(Addition)



// Function Expression
const add2 = function add(x, y) {
    return x + y;
}

//-------------OR---------------

const add3 = function (x, y) {
    return x + y;
}
// Arrow Function
const add4 = (m, n) => m + n;
const Result = add4(6, 9)
console.log(Result)

// Arrow Function ---> Double parameters
const multiply = (p, q) => p * q
const Multiplication = multiply(7,6)
console.log(Multiplication)

// Arrow Function ---> More parameters
const Total = (a, b, c, d) => a + b + c + d
const TotalSum = Total(4,36,5,8)
console.log(TotalSum)


// Arrow Function ---> Single parameters
const doubleIt = (num) => num * 2
const Answer = doubleIt(4)
console.log(Answer)



const person = {
    name : 'Rakib',
    age : 25,
    Occupation: 'Web Developer' 
}
// Arrow Function ---> No parameters
const gateAge = () => person.age
const RakibsAge = gateAge()
console.log(RakibsAge)