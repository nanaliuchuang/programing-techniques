// Liệt kê tất cả các số nguyên tố nhỏ hơn n.
var n = Number(prompt("Enter n :"));
// kiem tra a co phai so nguyen to hay khong?

function isPrimeNumber(a){
    let s = 0;
    for (let i = 1; i <= a; i++){
        if(a % i == 0){
            s++;
        }
    }
    if (s == 2){
        return true;
    } else {
        return false;
    }
}

function listPrimeNumber(n){
    for (let i = 1; i <= n; i++){
        if(isPrimeNumber(i) == true){
        console.log(`List prime number of ${n} is :` + i);
        alert(`List prime number of ${n} is :` + i);
    }
}
}
listPrimeNumber(n);