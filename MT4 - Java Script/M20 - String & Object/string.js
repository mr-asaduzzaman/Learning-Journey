// Start

// // নিচের কয়েক নিয়মে স্ট্রিং ডিকলেয়ার করা যায়।

// const country = "Bangladesh"            // String can declare with ""
// const division = 'Dhaka'                // String can declare with ""
// const district = `Tangail`              // String can declare with ""
// const thana = new String("Dhanbari")    // String can declare with ""


// // প্রথম তিনটা হলো স্ট্রিং/
// // শেষের থানা হলো অবজেক্ট।

// console.log(typeof country)         //Output string
// console.log(typeof thana)         //Output Object


// // প্রথম গুলো তে সরাসরি আউটপুট দেখাবে।
// // অবজেক্ট এর আউটপুট একটু ব্যাতীক্রম করে দেখাবে।

// console.log(division)          //Output Dhaka
// console.log(thana)          //Output [String: 'Dhanbari']

// End


//------- স্ট্রিং কিছুটা এরের মতো--------------//


let numbers = [45, 65, 64, 15, 24, 11, 94] //This is an array

console.log(numbers.length)       // Output 7
console.log(numbers)              // Output [45, 65, 64, 15, 24, 11, 94]

numbers[1] = 111;                  // 2nd Index will change to 111
console.log(numbers)               // Output [45, 111, 64, 15, 24, 11, 94]




let division = "Dhaka"                   // This is a string

console.log(division.length)       // Output 7
console.log(division)              // Output Dhaka
division[0] = "F"     // ঢাকা (Dhaka) এর জায়গায় ফাকা (Fahka) হওয়ার কথা 
                    // কিন্ত হচ্ছেনা, এটাই মুলত এরে আর স্ট্রিং এর পার্থক্য
console.log(division)






