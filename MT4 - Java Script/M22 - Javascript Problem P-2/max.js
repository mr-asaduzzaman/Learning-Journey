function GetMax(x, y){

    if(x>y){
        return x
    }
    else{
        return y
    }
}

const Answer = GetMax(45,68)
console.log('Maximum value is', Answer)