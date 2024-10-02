///--------------||| এরের মতো অবজেক্ট কেও লুপ করানো যায় ।।।-------------///
// খুব বেশি ভালো বুঝিনাই।



const mobile = {
    Brand : "Redmi",
    Storage : "8/256 GB",
    Color : "Black",
    Variant : "Global",
}

console.log(mobile)

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}
