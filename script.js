console.log("Test");

function converter(celcius) {
    console.log(celcius * 9 / 5 + 32);
}

converter(30);


var prices = [10, 15, 25, 8, 4, 55, 99, 11, 15, 25, 5, 4, 65, 5, 10, 15, 7, 8, 4, 9, 100];

//using a while loop, traverse the array and multiply each price by 2
var index = 0,
    length = prices.length;
while (index < length) {
    prices[index] *= 2;
    index++;
}

console.log(prices);