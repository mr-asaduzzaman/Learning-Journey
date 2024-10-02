///--------------||| case - স্পেস এর ক্যারফা ।।।-------------///


// const school = "Paiska High School"
// const department = "Accounting"
// const book = "   Accounting"

// if(department === book){
//     console.log("Department ar Book er nam to ek e")
// }
// else{
//     console.log("department ar Book er nam alada")  //This line will be the OUTPUT
// }

// এখানে ডিপার্টমেন্ট এর  নাম আর বই এর নাম একই। 
// কিন্ত ঝামেলা হইলো একটার আগে স্পেস আছে আরেকটার আগে স্পেস নাই।
// এই স্পেস নিয়া ক্যারফা লাগছে, কম্পেয়ার কইরা কইতাছে দুইটা জিনিস এক না।

// উপরের ঝামেলা ডারে সাইজ করার সুন্দর একটা টেকনিক আছে। 
// দুইডারেই যদি .trimd কইরা দেই, তাইলে আর ঝামেলায় পড়বে না। 




const school = "Paiska High School"
const department = "Accounting"
const book = "    Accounting"

if(department.trim() === book.trim()){
    console.log("Department ar Book er nam to ek e")    //This line will be OUTPUT
}
else{
    console.log("department ar Book er nam alada")
}