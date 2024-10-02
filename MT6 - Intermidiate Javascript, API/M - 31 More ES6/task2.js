const numbers = [33, 50, 79, 78, 90, 101, 30]

const devisibleByTen = numbers.filter (num => num % 10)
console.log(devisibleByTen) // [ 33, 79, 78, 101 ]

const findDevisibleByTen = numbers.find (num => num % 10)
console.log(findDevisibleByTen) //33 
