// Object Destructuring 

const instructor = {
    name: 'Rakib',
    age: 25,
    position: 'Senior'
}


// Old Method
const name = instructor.name
const age = instructor.age
const position = instructor.position


// // New and easy method
// const {name, age, position} = instructor

console.log(age) // 25













// Array Destructuring

const numbers = [6, 4, 2, , 7, 5, 6]

const [num1, num2, num3] = numbers

console.log(num2) // Output 4



// Array Rest Operator
const Friends = ['Ruhul', 'Borat', 'Ramjan', 'Biddut', 'Alim']

const [Friend1, Friend2, ...FriendRemaining] = Friends

console.log(Friend1) // Ruhul
console.log(FriendRemaining)  // [ 'Ramjan', 'Biddut', 'Alim' ]