const ShirtPrice = 500;
const PantPrice = 700;
const ShoePrice = 1200;

function TotalPrice(ShirtQuantity, PantQuantity, ShoeQuantity){
    const ShirtTotalPrice = ShirtPrice * ShirtQuantity;
    const PantTotalPrice = PantPrice * PantQuantity;
    const ShoeTotalPrice = ShoePrice * ShoeQuantity;

    const Total = ShirtTotalPrice + PantTotalPrice + ShoeTotalPrice;
    return Total;
}

const Answer = TotalPrice(4,3,2)
console.log('Total Shoping Cost = ', Answer, 'Tk')

