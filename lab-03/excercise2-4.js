// Tính tổng sau: S(n) = 1/2 + 1/4 + ... + 1/2(n-1) + 1/2n
var n = Number(prompt("Enter n :"));
let s = 0;

for (let i = 2; i <= 2 * n; i = i + 2){
    s += 1/i;
}

console.log(`S(${n}) = 1/2 + 1/4 + ... + 1/2*(${n}-1) + 1/2*${n} is : ` + s);
alert(`S(${n}) = 1/2 + 1/4 + ... + 1/2*(${n}-1) + 1/2*${n} is : ` + s);