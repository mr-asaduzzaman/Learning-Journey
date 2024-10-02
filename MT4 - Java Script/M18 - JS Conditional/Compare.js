/*
 *  COMPERISION
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. grater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * 7. and: &&
 * 8. or: ||
 * 9. 
 */



var applePrice = 200;
var bananaPrice = 101;
var mangoPrice = "200"

console.log(applePrice > bananaPrice);  // Output will be True
console.log(applePrice < bananaPrice);  // Output will be False
console.log(applePrice >= bananaPrice);  // Output will be True
console.log(applePrice <= bananaPrice);  // Output will be False
console.log(applePrice == bananaPrice);  // Output will be False
console.log(applePrice != bananaPrice);  // Output will be True


console.log(applePrice == mangoPrice);  // Output will be False (Value and typeof dekhe)
console.log(applePrice === mangoPrice);  // Output will be True (Shudhu Value Dekhe)


console.log(applePrice != mangoPrice);  // Output will be True (Value and typeof dekhe)
console.log(applePrice !== mangoPrice);  // Output will be False (Shudhu Value Dekhe)

