//--জাভাস্ক্রিপ্ট এ সর্টিং বা এলফাবেটিকালি সাজানো যায়, তবে কিছু ক্যারফা আছে। --//


const Friends = ['Alim', 'Shamim', 'Biddut', 'Ramjan', 'Rahat']
console.log(Friends.sort())

            //OUTPUT will be [ 'Alim', 'Biddut', 'Rahat', 'Ramjan', 'Shamim' ]



const numbers = [1, 2, 5, 7, 8, 4, 9, 6, 4, 7]
console.log(numbers.sort())

            // OUTPUT will be  [1, 2, 4, 4, 5, 6, 7, 7, 8, 9]


            

const largeNumbers = [1, 24, 54, 7, 8, 24, 9, 76, 4, 7] 
console.log(largeNumbers.sort())             //---->> Not working properly.

            // OUTPUT will be  [1, 24, 24, 4, 54,7,  7, 76, 8, 9]