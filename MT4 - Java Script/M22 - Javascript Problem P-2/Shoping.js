const Products = [
    { Name: "Shampo", Price: 200 },
    { Name: "Shirt", Price: 700 },
    { Name: "Pant", Price: 600 },
    { Name: "Hizab", Price: 400 },
]


function TotalPrice(Habizabi) {
    let sum = 0;
    for (const Product of Products) {
        sum = Product.Price + sum;
    }
    return sum
}

const Total = TotalPrice(Products);
console.log('Ajker Baazaar Khoroch :', Total)