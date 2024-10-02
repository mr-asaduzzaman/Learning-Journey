// ---------------- INCH TO FEET -------------------------//

function InchToFeet(inch){
    const Feet = inch / 12;
    const FeetPart = parseInt(Feet);
    const InchPart = inch % 12;
    const Result = FeetPart + ' Feet ' + InchPart + ' Inch ';
    return Result;
}

const RakibHeight = 45;
const Answer = InchToFeet(RakibHeight)
console.log(Answer)




//------------------------------Miles TO kilometers ------------------//




function MilesToKillometer(Mile){
    const kilometer = Mile * 1.60934;
    const output = MileDistance + ' Mile = ' + kilometer + ' Kilometer';
    return output 


}


const MileDistance = 60;
const Km = MilesToKillometer(MileDistance);
console.log(Km)






