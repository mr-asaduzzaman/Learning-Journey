// // ---------------EXAMPLE 1 ---------------- //

// // সাধারন মেথড

// const age = 15;

// if (age >= 18){
//     console.log("Vote dite parba")
// }

// else{
//     console.log("Tumi choto baccha")
// }


// //  উপরের ইফ এলস কে টার্নারির সাহায্যে এক লাইনে লেখা যাবে।
// //  TERNARY Method >>>>>>>>>   condition ? if : else

// age >= 18 ? console.log("Vote dite parba") : console.log("Baccha Pulapan")


// // ---------------EXAMPLE 2 ---------------- //
// // সাধারন মেথড

// let price = 500;
// const isLeader = true;

// if(isLeader === false){
//     price = 0;
// }
// else{
//     price = price + 100;
// }

// console.log(price)



// টার্নারি মেথড (নিজে নিজে)
// conat isLeader = true;
// let price = 400

// isLeader === true ? price = 0 : price = price + 100
// console.log(price)

// টার্নারি মেথড (ঝংকার ভাই)

// price = isLeader === true ? 0 : price + 100  
//     console.log(price)



// ---------------EXAMPLE 3 ---------------- //
// সাধারন মেথড

// let price = 500;
// const isLeader = false;

// if(isLeader === true){
//     if(price > 1000){
//         price = price/2
//     }
//     else{
//         price = 0
//     }
// }
// else{
//     price = price + 100;
// }

// console.log(price)



// টার্নারি মেথড (নিজে নিজে)
const isLeader = true;
let price = 2400


isLeader === true ? price = 
            price > 1000 ? price /2 : price = 0 
                        : price = price + 100
console.log(price)