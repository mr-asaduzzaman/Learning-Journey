// হুয়াইল লুপের কাজ গুলো ফর লুপের সাহায্যেও শর্টকাটে করা যায়।


// let num = 1;

// while(num <= 10){
//     console.log(num)
//     num++
//     if(num % 2 === 0){
//         console.log("Even number", num)
//     }
//     else{
//         console.log("Odd Number", num)
//     }
// }


//For Loop Structar

// for(  Declaration  ;  COndition   ;   Variable Change  ){
            // console,log(Result)
// }

// উপরের হুয়াইল লুপ কে আমরা ফর লুপের সাহায্যে করার ট্রাই করি।


// for(let num = 1; num < 10; num++){
//     if(num % 2 === 0){
//         console.log("Even Numbers =", num)
//     }
//     else{
//         console.log("Odd number =", num)
//     }
// }


// num কে আমরা i ধরতে পারি, num ধরলেও কোনো সমস্যা নাই, 
// তবে i ধরলে নাকি কিছু বেনিফিট পাওয়া যায়। কি বেনিফিট আমি জানিনা, ঝংকার ভাই কইছে।
// num >>>> i

for(let i = 1; i < 10; i++){
    if(i % 2 === 0){
        console.log("Even Numbers =", i)
    }
    else{
        console.log("Odd number =", i)
    }
}
