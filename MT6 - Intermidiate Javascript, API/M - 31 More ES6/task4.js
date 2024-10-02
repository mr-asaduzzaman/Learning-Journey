const instructor = [
    { name: 'Rakib', age: 20, },
    { name: 'Sakib', age: 15, },
    { name: 'Hasib', age: 22 }
]


const TotalAge = instructor.reduce((accumulate, current) => accumulate + current.age, 0)
console.log(TotalAge)