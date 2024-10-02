const isBCS = false;
const salary = 45000;
const height = 66;

// পাত্র বিসিএস ক্যাডার হইলে পাত্রী রাজি
// if(isBCS == true){
//     console.log("কবুল কবুল কবুল")
// }
// else{
//     console.log("অন্য পাত্র খুজো")  This is the OUTPUT  
// }

// পাত্র বিসিএস ক্যাডার হইলে অথবা স্যালারি ৪০০০০ এর বেশী হইলে পাত্রী রাজি
// if(isBCS == true || salary > 40000){
//     console.log("কবুল কবুল কবুল")
// }
// else{
//     console.log("অন্য পাত্র খুজো")    
// }

// পাত্র বিসিএস ক্যাডার হতে হবে অথবা স্যালারি ৪০০০০ এর বেশী হতে হবে এবং উচ্চতা ৬৫ ইঞ্চির বেশি হইলে পাত্রী রাজি

if((isBCS == true || salary > 40000) && height > 65){
    console.log("কবুল কবুল কবুল")
}
else{
 
    console.log("অন্য পাত্র খুজো")    
}