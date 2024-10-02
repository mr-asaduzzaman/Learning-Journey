const instructor = [
    {name: 'Rakib', age: 25, position: 'Senior'},
    {name: 'Sakib', age: 18, position: 'Junior'},
    {name: 'Hasib', age: 27, position: 'Senior'}
]

const Seniors = instructor.filter(person => person.age > 20)
const SeniorName = Seniors.map(Person => Person.name)
console.log(SeniorName)