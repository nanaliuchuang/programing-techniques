// Tính tổng sau: S(n) = 1 + 2 + ... + (n-1) + n
var n = Number(prompt("Enter n :"));
let s = 0;

for (let i = 0; i <= n; i++){
    s += i;
}

console.log(`S(${n}) = 1 + 2 + ... + (${n}-1) + ${n} is : ` + s);
alert(`S(${n}) = 1 + 2 + ... + (${n}-1) + ${n} is : ` + s);