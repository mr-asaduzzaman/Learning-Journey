const student = {
    name : "Asaduzzaman Rakib",
    gender : "Boy",
    IdNumber : 541,
    isPresent : true,
    isUniformed : false,
    favouriteSubject : ["Bangla", "English", "Math"],
};

console.log(student);            // output will be full object details
console.log(student.name);       //---Dot Notation--- Output will be value of name
console.log(student["name"]) ;   // ---Bracket Notation ---- Output will be value of name

// সব ঠিক আছে। student.name দ্বারা আউটপুট পাবো। কিন্তু যদি নেইম টার মাঝে স্পেস বা ড্যাস থাকে যেমন student.na-me তাহলে ডট মেথড দ্বারা আউটপুট পাবো না। তখন আউটপুট পাওয়ার জন্য থার্ড ব্রাকেট মেথড student["name"] ফলো কর‍তে হবে।






// আমরা চাইলে স্ট্রিং কে কিছুটা এরের মতোও কাজে লাগাতে পাড়ি। 
// ভ্যালু এর মান চেঞ্জ কর‍তে পারবো। যেমন .........

student["name"] = "MD Asaduzzaman"; // নাম Asaduzzaman Rakib থেকে MD Asaduzzaman হয়ে গিয়েছে।

console.log(student);


///বা আরও অন্য ভাবেও করতে পাড়ি


newIdNumber = student["IdNumber"] + 200
console.log(newIdNumber);
