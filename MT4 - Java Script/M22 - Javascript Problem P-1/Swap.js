let a = 5;
let b = 7;

console.log(a, b)


const temporary = a;
a = b;
b = temporary;

console.log(a, b)


//----------------

let x = 9;
let y = "3";
console.log(x, y);

[x, y] = [y, x];

console.log(x, y)



for (var i = 0; i < 5; i++) {
     setTimeout(function () {
    console.log(i);
   }, 100);
}