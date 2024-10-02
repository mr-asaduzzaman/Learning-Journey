

// Option-1: getElementsByTagName ----> head body h1 section bla bla bla..... 
// This command will show Tag name.

const Tags = document.getElementsByTagName('h1')
console.log('This command will show Tag name',Tags);



// Option-2: getElementById ----> Id name
// This command will show element of an ID.

const ID = document.getElementById('Bird');
console.log('This command will show elements of an ID',ID)



// Option-3: getElementsByClassName ----> Class Name
// This command will show you the elements of a class

const clasNames = document.getElementsByClassName('Folmul');
for(const Class of clasNames)
console.log('This command will show you the class', Class)


// Option-4: querySelector

const Css = document.querySelector('.FolMul');
console.log('This command will show you css ',Css)



// Option-5: querySelectorAll

const allCss = document.querySelectorAll('.FolMul');
console.log('This command will show you All css ',allCss)





// getElementById ----> Id name.innerHTML
// This command will show you the HTML Tag of an ID.

const ID_HTML = document.getElementById('Bird');
console.log('This command will show innerHTML of an ID',ID_HTML.innerHTML)


// getElementById ----> Id name.innerText
// This command will show you the Text Tag of an ID.

const ID_Text = document.getElementById('Bird');
console.log('This command will show innerText of an ID',ID_Text.innerText)









// হেডার নামে ভেরিয়েবলে ট্যাগ নেইম দিয়ে হেডার ট্যাগ কে ডিকলেয়ার করলাম। তারপর ফর লুপ চালিয়ে হেডারের মধ্যে যতগুলো হেডার ট্যাগ আছে তাদের একটা একটা করে ডাকলাম। ডেকে বললাম যে, তোমারে স্টাইল মারতে চাই। তারপর নানান চেহারা সরুত অনুযায়ী সাজুগুযু করে দিলাম।
const Header = document.getElementsByTagName("header")
    for(const head of Header){
        head.style.color = "red"
        head.style.fontSize = "30px"
        head.style.marginBottom = "10px"
    }


// সেকশন্স নামে ভেরিয়েবলে ট্যাগ নেইম দিয়ে সেকশন ট্যাগ কে ডিকলেয়ার করলাম। তারপর ফর লুপ চালিয়ে যতগুলো সেকশন ট্যাগ আছে তাদের একটা একটা করে ডাকলাম। ডেকে বললাম যে, তোমারে স্টাইল মারতে চাই। তারপর নানান চেহারা সরুত অনুযায়ী সাজুগুযু করে দিলাম।

const sections = document.querySelectorAll('section')
    for(const section of sections){
    section.style.paddingLeft = "20px";
    section.style.color = "blue";
    }



// প্রথমে আইডির নাম ধরে ডেকে একটা ভেরিয়েবলের মধ্যে রাখলাম। তারপর অই আইডিরে জিগাইলাম তোমার মধ্যে যে ক্লাস গুলা আছে তার মধ্যে নতুন একটা ক্লাস এড করতে চাই। কইলো ইয়েস বস এড করেন। 

// কিন্ত ক্লাস নেইম এড করার পর দেহি খুব বেশী ভালো লাগে না, তাই আবার নতুন ক্লাস রে অই সেকশন থেকে ঘার ধাক্কা দিয়া বাইর কইরা দিলাম। 

const folmul = document.getElementById("Fruits")
    folmul.classList.add("FontSize")
    folmul.classList.remove("FontSize")