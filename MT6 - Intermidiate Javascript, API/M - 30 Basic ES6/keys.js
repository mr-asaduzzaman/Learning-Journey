const address = {
    name: 'Rakib',
    village: 'Barnichandabari',
    Post: 'Dhanbari',
    zila: 'Tangail',
    isBangladeshi: true
}

// Object.keys will provide the property names in an array.
const keys = Object.keys(address);
console.log(keys) // [ 'name', 'village', 'Post', 'zila', 'isBangladeshi' ]


// Object.values will provide the property value in an array.
const values = Object.values(address);
console.log(values) // [ 'Rakib', 'Barnichandabari', 'Dhanbari', 'Tangail', true ]


// Object.entries will provide the property name and value in an array as pair array.
const entries = Object.entries(address);
console.log(entries)
/*
[
  [ 'name', 'Rakib' ],
  [ 'village', 'Barnichandabari' ],
  [ 'Post', 'Dhanbari' ],
  [ 'zila', 'Tangail' ],
  [ 'isBangladeshi', true ]
]
*/

// This syntax will delete a property from an object.
delete address.isBangladeshi
console.log(address)