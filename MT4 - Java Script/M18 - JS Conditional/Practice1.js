/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800;
let age = 24;
let Students = true;

if(age < 10){
    fare = "Free"
}
else if(age < 60 && Students === true){
    fare = fare - fare * 50 / 100
}
else if(age >=60){
    fare = fare - fare * 15 / 100
}
else{
    fare = fare
}

console.log(fare)