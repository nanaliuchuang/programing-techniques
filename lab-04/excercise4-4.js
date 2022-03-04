// Đếm số lượng “ước số chẵn” của số nguyên dương n
var prompt = require('prompt-sync')();
var n = prompt("Enter n :");

function countEvenDivisor(n){
    let count = 0;

    if ( n <= 0){
        console.log(`${n} is not a positive integer`);
    }

    for (let i = 1; i <= n ; i++){
        if (n % i == 0 && i % 2 == 0){
            count++;
            console.log(`Even divisors of number ${n} is : ` + i);
        }
    }
    console.log(`Count even divisor of ${n} is : ` + count);
}
countEvenDivisor(n);