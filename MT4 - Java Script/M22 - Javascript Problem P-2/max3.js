function Max3(x, y, z){
    if(x>y && x>z){
        return x;
    }
    else if(y> x && y > z){
        return y;
    }
    else{
        return z;
    }
}

const Answer = Max3(45,35,16)
console.log('Max result is', Answer)