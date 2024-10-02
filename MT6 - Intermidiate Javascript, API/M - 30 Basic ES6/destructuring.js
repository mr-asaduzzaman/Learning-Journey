const student = {
    name: 'Rakib',
    age: 26,
    school: 'Paiska High School',
    id: 24512
}

/**
 একটা অবজেক্ট থেকে প্রোপার্টি নেইম কে ভেরিয়েবল এ রেখে আমরা কাজ চালাতে পারি.
 * 
const name = student.name
const age = student.age
console.log(name, age)
 * 
 */


// তবে ডিসস্ট্রাকচারিং এর মাধ্যমে আরও ইজিলি কাজ টা করে ফেলা যায়। এরে থেকে প্রোপার্টি কে ডিসস্ট্রাকচার করতে চাইলে প্রোপার্টি নেইম কে একটা অব্জেক্ট ব্র্যাকেটের মধ্যে রেখে ডান পাশে অবজেক্ট নেইম টা দিয়ে দিলেই হয়।

const { name } = student
console.log(name)

// --------OR--------

const { age, id } = student
console.log(age, id) // Output 26 24512

// প্রোপার্টির ডাক নাম ও সেট করা যায়
const { age : boyos, id : identity} = student
console.log(boyos, identity) // Output 26 24512



// এরে কে ভেরিয়েবলে রেখে ডিসস্ট্রাকচার করা যায়। 

const numbers = [46, 62, 12]
const [x, y, z] = numbers

console.log(x, z) // Output 46 12

//-----------OR----------
// এরে কে সরাসরি ও ডিসস্ট্রাকচার করা যায়। 

const [a, b, c] = [45, 78, 69]
console.log(b, c) // Output = 78, 69