// Liệt kê tất cả các số nguyên tố nhỏ hơn n.
// kiem tra a co phai so nguyen to hay khong?
var prompt = require('prompt-sync')();
let n, i, j, count;
do {
n = Number(prompt("Enter n (n > 1): "));
} 
while (isNaN(n) || n <= 1);
for (i = 2; i < n; i++) {
count = 0;
for (j = 1; j <= i; j++) {
if (j % 1 == 0 && i % j == 0) {
count++;
}
}
if (count == 2) {
console.log(i);
}
}