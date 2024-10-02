const FriendList1 = ['Ruhul', 'Borat', 'Shamim', 'Alim', 'Edul']
const FriendList2 = ['Ramjan', 'Biddut', 'Rahat']
const newList1 = []
const newList2 = []


for (const friend of FriendList1) {
    if (friend.length % 2 === 0) {
        newList1.push(friend)
    }
}




for (const friend of FriendList2) {
    if (friend.length % 2 === 0) {
        newList2.push(friend)
    }
}


const newFriendList = [...newList1 ,...newList2]
console.log(newFriendList)
