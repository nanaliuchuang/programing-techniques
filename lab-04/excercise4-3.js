// Tính tổng tất cả “ước số chẵn” của số nguyên dương n
var n = Number(prompt("Enter n :"));

function sumEvenNumber(n) {
    let sum = 0;

    if (n <= 0) {
        console.log(`${n} is not a positive integer`);
    }
    
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && i % 2 == 0) {
            sum += i;
            console.log(`Even divisors of number ${n} is : ` + i);
            alert(`Even divisors of number ${n} is : ` + i);
        }
    }
    console.log(`Sum of even divisor ${n} is : ` + sum);
    alert(`Sum of even divisor ${n} is : ` + sum);
}
sumEvenNumber(n);
