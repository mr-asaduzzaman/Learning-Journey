/*
মনে কর তুমি আব্দুল্লাহ, তুমি তোমার দোকানে বিভিন্ন ধরনের মোবাইল এক্সেসরিজ পাইকারি বিক্রয় কর। তোমার বড় ভাই রাকিব একজন সফটওয়্যার ইঞ্জিনিয়ার। তুমি চাচ্ছ তোমার দোকানের জন্য একটু ওয়েবসাইট তৈরি করতে। ওয়েব সাইটে এমন একটি ফাংশন থাকবে যেখানে,

---> কেউ যদি ১০০ টি হেডফোন অর্ডার করে তাহলে প্রত্যেকটি হেডফোনের মূল্য হবে ১০০ টাকা। 

---> কেউ যদি ১০০ টির বেশী হেডফোন অর্ডার করে, তাহলে প্রথম ১০০ টি হেডফোনের মূল্য হবে ১০০ টাকা করে এবং উপরের হেডফোন গুলোর মূল্য হবে ৯০ টাকা করে।

---> কেউ যদি ২০০ টির বেশী হেডফোন অর্ডার করে, তাহলে প্রথম ১০০ টি হেডফোনের মূল্য হবে ১০০ টাকা করে এবং ২য় ১০০ টি হেডফোনের মূল্য হবে ৯০ টাকা করে। এবং ২০০ এর উপরে যে হেডফোন গুলো কিনবে সব গুলোর মুল্য হবে ৭০ টাকা করে. 

তুমি তোমার বড় ভাই কে, এরকম একটি ফাংশন জাভা স্ক্রিপ্ট দিয়ে তৈরি করার জন্য অনুরোধ করলে।
*/


function DiscountPrice(Quantity){
    if(Quantity <= 100){
    const Price = Quantity * 100;
    return Price
    }
    else if(Quantity <= 200){
        const discountQuantity = Quantity - 100;
        const OriginalPrice = 100 * 100;
        const GetDiscount = discountQuantity * 90;
        const Price = OriginalPrice + GetDiscount;
        return Price
    }
    else{
        
        const discountQuantity = Quantity - 200;
        const OriginalPrice = 100 * 100;
        const OriginalPrice2 = 100 * 90;
        const GetDiscount = discountQuantity * 70;
        const Price = OriginalPrice + OriginalPrice2 + GetDiscount;
        return Price
    }
}

const HeadphoneQuantity = 500;
console.log(DiscountPrice(HeadphoneQuantity))