const products = [
    {id: 1, name: 'Nokia', price: 25000},
    {id: 2, name: 'Samsung', price: 40000},
    {id: 3, name: 'Xaomi', price: 35000},
    {id: 4, name: 'Oppo', price: 15000}
]


// এরে থেকে প্রত্যেকটা অব্জেক্ট এর প্রাইস নতুন একটা এরে তে পেতে চাই
// arrayName.map
const Prices = products.map(product => product.price)
console.log(Prices)
// Output [ 25000, 40000, 35000, 15000 ]




// এরে থেকে প্রত্যেকটা অব্জেক্ট এর আইডি পেতে চাই
// arrayName.forEach
const Ids = products.forEach(product => console.log(product.id))
// Output 1 2 3 4




// এরে থেকে সবচেয়ে দামী অর্থাৎ ৩০০০০ এর চেয়ে দামী প্রোডাক্ট গুলো পেতে চাই।
// arrayName.filter
const Expensive = products.filter(product => product.price > 30000)
console.log(Expensive)
// Output 
// [
//   { id: 2, name: 'Samsung', price: 40000 },
//   { id: 3, name: 'Xaomi', price: 35000 }
// ]


// এরে থেকে ৩০০০০ এর চেয়ে কমদামী প্রোডাক্ট এর প্রথমটি পেতে চাই।
// arrayName.find
const affordable = products.find(product => product.price < 30000)
console.log(affordable)
// Output { id: 1, name: 'Nokia', price: 25000 }


// এরে এর সবগুলো প্রোডাক্ট প্রাইস যোগ করতে চাই।
// arrayName.reduce
const total = products.reduce((previous, current) => previous + current.price ,0)
console.log(total)
// Output 115000 