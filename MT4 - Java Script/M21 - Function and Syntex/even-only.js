// Create a function that will return only the even numbers from an array.

function isEven(numbers) {
    const Evens = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            Evens.push(num)
        }
    }
    return Evens
}
    

const array = [5, 4, 5, 4, 6, 4, 5];
console.log(isEven(array))