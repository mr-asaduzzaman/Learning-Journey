//------------Ul এর মাঝে একটা Li ইনসার্ট করবো---------------//


// 1. আইডির নাম ধরে ডেকে বলবো, আসো তোমারে একটা নতুন চাইল্ড দেই।
const NameList = document.getElementById('FriendList');

// 2. এরপর বলবো একটা এলিমেন্ট ক্রিয়েট করো তো বাবা।
const li = document.createElement('li');

// 3. এলিমেন্ট এর মধ্যে হাবিজাবি লেইখা দিলাম।
li.innerText = 'Ruhul Amin'


// 4. ওই যে আইডির নাম ধরে ডেকে যে ভেরিয়েবল ডিকলেয়ার করেছিলাম, ওর আন্ডারে একটা বাচ্চা যোগ করে দিবো।
NameList.appendChild(li)







//-------------------নতুন একটা সেকশন এড করবো জাভাস্ক্রিপ্ট দিয়ে-----------------


const Main = document.getElementById('main');
const section = document.createElement("section");
Main.appendChild(section)


const h1 = document.createElement('h1');
h1.innerText = "This is my Favorite movie list";
const ul = document.createElement('ul');

section.appendChild(h1);
section.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = "3 Idiots"
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = "Secret Superstar"
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = "12th Fail"
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = "Zindegi na milega dubara"
ul.appendChild(li4)

section.style.backgroundColor = 'lightGray'
section.style.paddingLeft = '15px'



// ------জাভাস্ক্রিপ্ট এতো প্যাচাপেচি না করেও সহজেই এইচটিএমএল এড করা যায় ------//

const SectionDress = document.createElement("section");
SectionDress.innerHTML = `
<h1> I Love this kind of dress</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Lungi</li>
    <li>Sendu Genzi</li>
</ul>
`
Main.appendChild(SectionDress)

SectionDress.style.paddingLeft = '15px'
