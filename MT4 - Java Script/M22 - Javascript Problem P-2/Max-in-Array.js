const Height = [54,37,23,45,5,14,78,65,68,74,45]
    let Min = Height[0]
function GetMax(Nums){
    for(const Num of Nums){
        if(Num < Min){
            Min = Num
        }
    }
    return Min
}


const Answer = GetMax(Height)
console.log('The minimum value in the array is', Answer)