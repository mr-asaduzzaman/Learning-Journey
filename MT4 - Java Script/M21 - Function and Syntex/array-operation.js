// Do the total of the numbers of the array\





function SumOfArray(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum
}
const array = [5, 47, 54, 54, 124, 36, 47, 5, 75, 74, 8, 41, 85, 4, 4, 5, 54]
const Answer = SumOfArray(array)
console.log(Answer)