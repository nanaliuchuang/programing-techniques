// Liệt kê tất cả các ước số của số nguyên dương n
var prompt = require('prompt-sync')();
var n = Number(prompt("Enter n :"));
var mod;

for (let i = 1; i <= n; i++){
    mod = n % i;
    if(mod == 0){
        console.log(`Divisor of a positive integer ${n} is : ` + i);
    }

}
