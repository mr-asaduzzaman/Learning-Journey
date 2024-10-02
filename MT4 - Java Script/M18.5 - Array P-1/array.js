// এরে দ্বারা একই ধরনের ভ্যালু গুলোকে একটি ভ্যারিয়েবল নামের মধ্যে ডিকলেয়ার করা যায়।

const numbers = [12, 25, 25, 54, 35, 64, 64,45];
const friends = ["Alim", "Shamim", "Borat", "Ruhul", "Edul", "Rasel", "Limon"];
const isPassed = [true, false, true, false];


// এরের মধ্যে কতগুলো ভ্যালু আছে তা লেংথ কমান্ড ব্যাবহার করে দেখা যায়।

console.log(numbers.length);  // Output will be 8
console.log(friends.length);  // Output will be 7


// এরের ভ্যালু গুলো কে সিরিয়ালি ডিকলেয়ার করতে চাইলে ইন্ডেক্স নাম্বার অনুযায়ী ডাকতে হয়। 
// ইন্ডেক্স নাম্বার শুরু হয় ০, ১, ২, ৩, ৮  ..........

console.log(numbers[5]);  // Output will be 64 (6th Number)
console.log(friends[0]);  // Output will be Alim



// এরের ভ্যালু পরিবর্তন করা যায়

numbers[4] = 54854;

console.log(numbers) // ৫ নাম্বার ইন্ডেনক্সের নাম্বার পরিবর্তন হয়ে ৫৪৮৫৪ হয়ে যাবে


//ইন্ডেক্স দিয়ে মান কে ভেরিয়েবল এর মধ্যে রাখা যায়

let bestFriend = friends[2]

console.log(bestFriend)  // আউটপুট আসবে বরাত