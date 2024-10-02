// Find the even numbers from an array and make average of the even numbers.

function EvenAvg() {
    const Even = [];
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            Even.push(number)
        }
    }
    for (const number of Even) {
        sum = sum + number;
    }
    
    const len = Even.length
    const avg = sum / len;
    return avg;
}

const numbers = [15, 24, 15, 16, 24, 35, 17, 18, 36, 19, 24, 18, 35]
const Answer = EvenAvg(numbers)
console.log(Answer)