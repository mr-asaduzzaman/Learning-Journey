// Show me 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Show me odd number from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1){
//         console.log(i)
//     }
// }


// Show me the numbers from 1 to 80 which are divisible by 5

// for (let i = 1; i <= 80; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }

// }


// // Show me the numbers from 1 to 50 which are divisible by 5 and 3 give me the sum total.

for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
}



// Show me the numbers from 1 to 50 which are divisible by 5 and give me the sum total.

let sum = 0;
for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {
        sum = sum + i
    }
}

console.log("Total", sum)
