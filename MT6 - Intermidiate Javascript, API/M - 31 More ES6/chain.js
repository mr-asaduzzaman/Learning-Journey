const Product = {
    Name : 'Samsung',
    Model : 'S 24',
    Color : {
        Red : ['light Red', 'Dark Red'],
        Blue : ['light Blue', 'Dark Blue'],
        Green : ['light Green', 'Dark Green']
    }
}

console.log(Product.Color.Blue[1]) // Output will Be DarkBlue
// প্রোডাক্ট নামের একটা অবজেক্ট এর মধ্যে কালার নামের একটা প্রোপার্টি এক্সেস করেছি। কালারের মধ্যে আবার ব্লু নামের একটা প্রোপার্ট এক্সেস করেছি। এই প্রোয়াপ্ররটি হলো একটি এরে। এই এরের সেকেন্ড ইনডেক্স টা এক্সেস করেছি। এভাবে ধাপে ধাপে এক্সেস করাকে বলা হয় চেইন।