/*

Task-5 (Hard)

Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};


Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean


*/
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(prop in myObject){
        console.log("Keys :", prop, "|", "type :", typeof myObject[prop])
    }





// ------------YES YES YES------------ //