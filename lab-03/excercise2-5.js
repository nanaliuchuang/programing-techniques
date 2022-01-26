// Tính luỹ thừa sau: T(x,n) = x ^ n
var n = Number(prompt("Enter n :"));
var x = Number(prompt("Enter x :"));
let T = 1;

for (let i = 1; i <= n; i++){
    T = Number(T * x);
}

console.log(`T(${x},${n}) = ` + T);
alert(`T(${x},${n}) = ` + T);

