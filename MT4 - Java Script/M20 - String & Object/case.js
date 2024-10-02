///--------------||| case - ছোট হাতের বড় হাতের ক্যারফা ।।।-------------///


// const school = "Paiska High School"
// const department = "Accounting"
// const book = "accounting"

// if(department === book){
//     console.log("Department ar Book er nam to ek e")
// }
// else{
//     console.log("department ar Book er nam alada")  //This line will be the OUTPUT
// }

// এখানে ডিপার্টমেন্ট এর  নাম আর বই এর নাম একই। কিন্ত ঝামেলা হইলো A আর a নিয়া। 
// এই ছোট হাতের a আর বড় হাতের A নিয়া ক্যারফা লাগছে। কম্পেয়ার কইরা কইতাছে দুইটা জিনিস এক না।

// উপরের ঝামেলা ডারে সাইজ করার সুন্দর একটা টেকনিক আছে। 
// দুইডারেই যদি Uppercase বা Lowercase কইরা দেই, তাইলে আর ঝামেলায় পড়বে না। 




const school = "Paiska High School"
const department = "Accounting"
const book = "accounting"

if(department.toLowerCase() === book.toLowerCase()){
    console.log("Department ar Book er nam to ek e")    //This line will be OUTPUT
}
else{
    console.log("department ar Book er nam alada")
}