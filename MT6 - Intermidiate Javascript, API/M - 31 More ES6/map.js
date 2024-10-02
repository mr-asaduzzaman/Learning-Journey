/*

 ArrayName.map দ্বারা এরের সব গুলো ইলিমেন্টের উপর লুপ করে। লুপ করে প্রত্যেকটা এলিমেন্ট কে একটা এরের মধ্যে রাখে এবং সেই এরে টা কে রিটার্ন করে দেয়। অনেকটা ফর লুপের মতো।
 
 তারপর সেই ইলিমেন্ট গুলোর উপর এরোও ফাংশন ডিকলেয়ার করা যায়। অর্থাৎ ফর লুপের প্যাচাপেচিকে সহজেই করা যায় ArrayName.map কমান্ডের সাহায্যে।

 */


const numbers = [4, 9, 5, 7, 8, 1, 2, 5]

const double = numbers.map(num => num * 2)
console.log('Double of the each element is :' , double)

const FiveTimes = numbers.map(num => num * 5)
console.log('FiveTimes of the each element is :' , FiveTimes)

const Square = numbers.map(num => num * num)
console.log('Square of the each element is :' , Square)



const Friends = ['Ruhul','Borat','Alim','Shamim']

const NameLength = Friends.map(Friend => Friend.length)
console.log('Length of the each name is :' ,  NameLength)

const FirstLetter = Friends.map(Friend => Friend[0])
console.log('First letter of each element is :' , FirstLetter)