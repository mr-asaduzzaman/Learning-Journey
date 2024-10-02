// for of ব্যাবহার করা হয় array অথবা string এর ক্ষেত্রে।
// for in ব্যাবহার করা হয় objects এর ক্ষেত্রে। 

const numbers = [3,1,5,7,9,4];
for(const num of numbers){
    console.log(num) 
    /**
     * Output will be
     *  3
        1
        5
        7
        9
        4
     */

}


const name = 'Asaduzzaman Rakib';
for(const latter of name){
    console.log(latter)
    /**
     * Output will be
     *  A
        s
        a
        d
        u
        z
        z
        a
        m
        a
        n

        R
        a
        k
        i
        b
     */
}



const student = {
    name: 'Rakib',
    age: 26,
    school: 'Paiska High School',
    id: 24512
}

for(const properties in student){
    const value = student[properties]
    console.log(properties, value)
}