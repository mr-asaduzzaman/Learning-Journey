const odd = [1, 3, 5, 7, 9]
const even = []
for (const num of odd) {
    even.push(num + 1)
}

console.log(even)

const evenArray = odd.map(num => num + 1)
console.log(evenArray)