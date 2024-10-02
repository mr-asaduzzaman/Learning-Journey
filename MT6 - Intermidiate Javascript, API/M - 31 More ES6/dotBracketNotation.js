const Person = {
    name: 'Rakib',
    address: 'Dhanbari',
    3: 'third',
    bapernam: 'Abdul Jalil',
    hometown: 'Tangail'
}


console.log(Person.name) // Rakib (ডট নোটেশন কাজ করবে)
console.log(Person.bapernam) // Rakib (ডট নোটেশন কাজ করবে)
console.log(Person['3']) // Third (এখানে ডট নোটেশন কাজ করবে না, ব্র্যাকেট নোটেশন ব্যাবহার করতে হবে)
