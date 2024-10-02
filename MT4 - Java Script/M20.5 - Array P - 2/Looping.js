/* 
    এরে-র ইনডেক্স গুলো পর্যায়ক্রমে আনার জন্য অর্থাৎ Arry কে Loop করার জন্য for বা while ব্যাবহার কর‍তে পারি। 
*/

const friends = ["Rasel", "Edul", "Limon", "Shanta"];
let length = friends.length;

// This is for loop
for (let i = 0; i < length; i++) {
    console.log(i, friends[i])
}


// This is While loop
let n = 0;
while(n < length){
    console.log(n, friends[n])
    n++
}