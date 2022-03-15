// Viết hàm nhập mảng 1 chiều (nhapmang)
var prompt = require('prompt-sync')();
function inputArrayNumbers(n,arr){
    for(let i = 0; i < n; i++){
        arr[i] = Number(prompt("Enter arr[" + i + "] :"));
    }
}
// Viết hàm xuất mảng 1 chiều (xuatmang)
function outputArrayNumbers(n,arr){
    for(let i = 0; i < n; i++){
        console.log("arr[" + i + "]" + arr[i]);
    }
}
// Viết hàm liệt kê các giá trị lẻ trong mảng (lietkele)
function listOddArrayNumbers(n,arr){
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 == 1 || arr[i] % 2 == -1){
            console.log(arr[i]);
        }
    }
}
// Viết hàm tính tổng các giá trị âm trong mảng (tongam)
function sumNegativeNumbers(n,arr){
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] < 0){
            sum += arr[i];
        }
    }
    return sum;
}
// Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng. (demsonguyento)
function isPrimeNumbers(n){
    // số nguyên tố là những số chỉ có đúng hai ước số là 1 và chính nó
    let flag = 1; // is prime number
    if(n < 2){
        return flag = 0;// number 2 is not prime number 
    }
    let i = 2;
    while(i < n){
        if(n % i == 0){
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}
function countPrimeNumber(n,arr){
    let count = 0;
    for (let i = 0; i < n; i++){
        if(isPrimeNumbers(arr[i]) == 1 && arr[i] < 100){
            console.log("Prime numbers in array is " + arr[i]);
            count++;
        }
    }
    return count;
}
function findMaxArrayNumber(n,arr){
    let max = arr[0];
    for(let i = 0; i < n; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
// Viết hàm kiểm tra trong mảng có tồn tại giá trị chẵn nhỏ hơn 100 hay không (tontaichan) (Kỹ thuật đặt cờ hiệu).
function checkEvenArrayNumbers(n,arr){
    let check = false;
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 === 0 && arr[i] < 100){
            check = true;
            console.log("Even numbers in arry smaller than 100 is " + arr[i]);
        }
    }
    return check;
}
function main(){
    // let n = Number(prompt("Enter number n :"));
    let arr = [24, 45, -10, 8, -2, 23, 13, 43, -1];
    let n = arr.length;

    // console.log(".\n --- Input Array Numbers ---");
    // inputArrayNumbers(n,arr);

    // console.log(".\n --- Output Array Numbers ---");
    // outputArrayNumbers(n,arr);

    console.log(".\n --- List Odd Array Number ---");
    listOddArrayNumbers(n,arr);

    console.log("Sum of negative numbers is", + sumNegativeNumbers(n,arr));

    console.log("Count of Prime Numbers is", + countPrimeNumber(n,arr));

    console.log("Find Max number in array is", + findMaxArrayNumber(n,arr));

    console.log("Check Even numbers in array smaller than 100 is " + checkEvenArrayNumbers(n,arr));
}
main();