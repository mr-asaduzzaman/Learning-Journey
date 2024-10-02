/*

 ArrayName.forEach দ্বারা এরের সব গুলো ইলিমেন্টের উপর লুপ করে। লুপ করে প্রত্যেকটা এলিমেন্ট কে একটা এরের মধ্যে রাখে কিন্তু সেই এরে টা কে রিটার্ন করে না। অনেকটা map এর মতো। তবে পার্থক্য হলো কিছুই রিটার্ন করে না।

 */


const numbers = [4, 9, 5, 7, 8, 1, 2, 5]

const double = numbers.forEach(num => num * 2);
console.log(double) // Result will be Undefined (কারন forEach কোনো কিছু রিটার্ন করে না)
