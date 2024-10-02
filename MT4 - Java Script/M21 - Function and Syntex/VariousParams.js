
//---Number Variable কে প্যারামিটার হিসেবে সেট করে যোগ বিয়োগ গুন ভাগ করা যায়----//

function Sum(x, y) {
    console.log(x, y);
    const sumResult = x + y;
    console.log('The Result of', x, '+', y, '=', sumResult);
}

Sum(4, 6)                   // Output --> The Result of 4 + 6 = 10




// প্যারামিটার হিসেবে স্ট্রিং কল করলে সেটার লেংথ বা কয়টা স্পেস নিছে তা বের করা যায়।

function StringSize(Str) {
    const size = Str.length;
    return size
}


const Result = StringSize("Asaduzzaman")
console.log(Result)                     // Output ----> 11


// স্ট্রিং এর লেংথ কি জোড় না কি বেজোড়?

function StringEvenOddd(x) {
    const len = x.length;
    if (len % 2 === 0) {
        console.log("String size is Even")
    }
    else {
        console.log("Sreing size is odd")
    }
}

const output = StringEvenOddd('MD Rakib')   //Output -----> String size is Even





// Parameter হিসেবে Bulean Variable কেও ডিকলেয়ার করা যায়।


function DoubleOrTripple(x, y) {
    if (y === true){
        const replay = x * 2;
        console.log('though the value of y is', y,',', x,'will be Doubled to',replay)
    }
    else{
        const replay2 = x * 3;
        console.log('though the value of y is', y,',', x,'will be Trippled to', replay2)
    }
}

const Answer = DoubleOrTripple(50, false)