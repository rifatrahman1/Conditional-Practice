const age = 12;
const price = 4200;

if(age == 12) {
    console.log('ne baba free te kha')
}

else if (age <= 15) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}

else if (age <= 40) {
    // 30% discount
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if ( age >= 60 ) {
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log(price)
}