//-------------SHAMIM PHOTOCOPY-----------------//

function Shamim(Reds, Milks) {
    let sum = 0;
    for (const Red of Reds) {
        sum = sum + Red;
    }
    const TotalRed = sum * 5;

    let add = 0;
    for (const Milk of Milks) {
        add = add + Milk;
    }
    const TotaMilk = add * 10;

    const TotalBill = TotalRed + TotaMilk;
    return TotalBill
}

// Shamim Photocopy Calculation :
const ShamimRedTea = [2, 4, 3, 8, 6, 1, 8]
const ShamimMilkTea = [4, 6, 7, 2, 9, 2]
console.log('Shamim Photocopy RedTea order :', ShamimRedTea, 'Cup')
console.log('Shamim Photocopy MilkTea order :', ShamimMilkTea, 'Cup')
console.log('Shamim Photocopy Total Bill :', Shamim(ShamimRedTea, ShamimMilkTea), 'Tk')
console.log('===============================================================')
console.log('===============================================================')



//-------------TapurTupur-----------------//

function TapurTupur(Reds, Milks) {
    let sum = 0;
    for (const Red of Reds) {
        sum = sum + Red;
    }
    const TotalRed = sum * 5;

    let add = 0;
    for (const Milk of Milks) {
        add = add + Milk;
    }
    const TotaMilk = add * 10;

    const TotalBill = TotalRed + TotaMilk;
    return TotalBill
}

// TapurTupur Calculation :
const TapurTupurRedTea = [2, 4, 3, 8, 6, 5]
const TapurTupurMilkTea = [4, 6, 7, 2, 9]
console.log('TapurTupur RedTea order :', TapurTupurRedTea, 'Cup')
console.log('TapurTupur MilkTea order :', TapurTupurMilkTea, 'Cup')
console.log('TapurTupur Total Bill :', TapurTupur(TapurTupurRedTea, TapurTupurMilkTea), 'Tk')
console.log('===============================================================')
console.log('===============================================================')






//-------------Medicine Shop-----------------//

function Medicine(Reds, Milks) {
    let sum = 0;
    for (const Red of Reds) {
        sum = sum + Red;
    }
    const TotalRed = sum * 5;

    let add = 0;
    for (const Milk of Milks) {
        add = add + Milk;
    }
    const TotaMilk = add * 10;

    const TotalBill = TotalRed + TotaMilk;
    return TotalBill
}

// Medicine Shop Calculation :
const MedicineRedTea = [2, 4, 3, 8, 6, 5]
const MedicineMilkTea = [4, 6, 7, 7, 9, 2]
console.log('Medicine Shop RedTea order :', MedicineRedTea, 'Cup')
console.log('Medicine Shop MilkTea order :', MedicineMilkTea, 'Cup')
console.log('Medicine Shop Total Bill :', Medicine(MedicineRedTea, MedicineMilkTea), 'Tk')
console.log('===============================================================')
console.log('===============================================================')


//-------------Tea Stall-----------------//


function TeaStall(Shamim, TapurTupur, Medicine) {
    const TotalReceive = Shamim + TapurTupur + Medicine;
    return TotalReceive
}

const TotalPay = TeaStall(Shamim(ShamimRedTea, ShamimMilkTea), TapurTupur(TapurTupurRedTea, TapurTupurMilkTea), Medicine(MedicineRedTea, MedicineMilkTea));
console.log('Total Sells of the day :', TotalPay, 'Tk')



