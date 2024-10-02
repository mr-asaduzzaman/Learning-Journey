const Phones = [
    { Name: 'Samsung', Price: 15000, Camara: '12mp', Color: 'Black' },
    { Name: 'Xiomi', Price: 20000, Camara: '12mp', Color: 'Black' },
    { Name: 'Iphone', Price: 100000, Camara: '12mp', Color: 'Black' },
    { Name: 'Walton', Price: 10000, Camara: '12mp', Color: 'Black' },
    { Name: 'Infinix', Price: 12000, Camara: '12mp', Color: 'Black' }
 
]


function ValuablePhone(Mobiles){
        let Max = Mobiles[0]
    for(const Mobile of Mobiles){
        if(Mobile.Price > Max.Price){
            Max = Mobile;
        }
    }
    return Max
}

const Valuable = ValuablePhone(Phones)
console.log('The Most valuable phone is :', Valuable.Name, 'and its Specification is' ,Valuable)