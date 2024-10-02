///--------------||| contat - স্ট্রিং কে এরে তে কনভার্ট করে ।।।-------------///


let FirstName = "Asaduzzaman";
let LastName = "Rakib";

let Full = FirstName + LastName                // AsaduzzamanRakib
let FullName = FirstName + " " + LastName      // Asaduzzaman Rakib
let FullName2 = FirstName.concat("", LastName)     // Asaduzzaman Rakib

console.log(Full) 
console.log(FullName)
console.log(FullName2)
