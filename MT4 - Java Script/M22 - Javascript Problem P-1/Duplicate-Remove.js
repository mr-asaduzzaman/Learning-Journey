// Remove Duplicate items from an array

function DuplicateRemover(list){
    const unique = [];
    for(const items of list){
        if(unique.includes(items) === false){
            unique.push(items)
        }
    }
    return unique
}

const numbers  = [5,6,6,1,7,2,8,4,5,1,5]
const names = ['Rakib', 'Shamim', 'Babul', 'Motin', 'Shamim']
const Answer = DuplicateRemover(names)
console.log(Answer)