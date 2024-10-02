// Create a function that will return sum of the even numbers from an array.


function SumOfEven(param) {
    let sum = 0;
    for (const num of param) {
        if (num % 2 === 0) {
            sum = sum + num;
        }
        
    }
    return sum;
}
const array = [1, 2, 4, 8, 4, 5, 5, 6, 3, 4, 7, 8,]
const Answer = SumOfEven(array)
console.log(Answer)