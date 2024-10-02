/*
প্রথমে আমি একটা ফাংশন ডিক্লেয়ার করছি স্কয়ার। স্কয়ারের মধ্যে আমি লিখছি নাম্বার।

স্কয়ারের ফাংশন কে কল করে আমি যে নাম্বারগুলো ইনপুট করব সে নাম্বার গুলো কনসোল লগ  করার মাধ্যমে আউটপুট দেখাবে।

এবং সেই আউটপুটের রেজাল্ট গুলো নিয়ে আমি কোন একটি নতুন ভ্যারিয়েবল ডিক্লিয়ার করব। 

সেই ডিক্লেয়ার করা ভ্যারিয়েবল কে আমি কনসোল লগ করে রেজাল্ট দেখাবো।
*/


// Function Diclear 
function ADD(X, Y) {
    const Result = X + Y;
    console.log("The Result of", X, "+", Y, "is", Result)

}
// Function Call
ADD(4,7)





//---------------------- SQUARE FUNCTION--------------------//

function square(number) {
    console.log(number);
    const Result = number * number;
    console.log("The square of", number, "is", Result)

}

square(4)
square(15)

//--------------------------SUM FUNCTION--------------------------//

function Sum(x, y) {
    console.log(x, y);
    const sumResult = x + y;
    console.log('The Result of', x, '+', y, '=', sumResult);
}

Sum(4, 6)
Sum(8,6)




//--------------------------LEAPYEAR CALCULATOR--------------------------//

function isleap(number){
    console.log(number)
    if(number % 4 === 0){
        console.log(number, "is a leapyear, Fabruary month is in 29 days")
    }
    else{
        console.log(number, "is not a lepyear, Fabruary month is in 28 days")
    }
}


isleap(2026)
