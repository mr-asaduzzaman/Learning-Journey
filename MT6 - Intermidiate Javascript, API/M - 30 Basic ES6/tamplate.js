// We will use BackTick to write multiple line code or dynamic changing value.

// Multiple line code
const email = `
Dear PrioManob,
Kemon achis tui? Kotodiin tor sathe jogajog nei.
ET,
Sporsher Ammu

`
console.log(email)


const a = 10;
const b = 20;
// Dynamically changing value
const Result = `The sum of ${a} and ${b} is ${a + b}`
console.log(Result)


// Another Example 
const Numbers = [45, 25, 74, 36, 54, 25, 19, 34]  // This is an Array
const Subjects = {                               // This is an Object
            Bangla : 25,
            English : 65,
            Math : 95,
            BGS : 'Absent'
}

const DynamicResult = `The second value of the array is ${Numbers[1]} and Obtain mark in English is ${Subjects.English}

And the sum of them are ${Numbers[1] + Subjects.English}`
console.log(DynamicResult)