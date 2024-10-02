// Default

function add(num1, num2){
 const sum = num1 + num2
return sum
}


const sum1 =  add(2,3) // output 5
const sum2 =  add () // output NaN

console.log(sum1, sum2)




function add(num1 = 0, num2 = 0){
 const total = num1 + num2
return total
}


const Result1 = add(2,3) // output 5 
const Result2 = add(2)  // output 2
const Result3 = add () // output 0

console.log(Result1, Result2, Result3)



