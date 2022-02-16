// Tính tổng các phần tử lẻ trong mảng.
function inputArrayNumber(arr,n){
    for ( let i = 0; i <= n; i++){
        arr[i] = Number(prompt("Enter arr [" + i + "]"))
    }
}
function outputArrayNumber(arr,n){
    for (let i = 0; i <= n; i++){
        console.log(arr[i]);
    }
}
function sumOddArray(n, arr) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (arr[i] % 2 == 1) {
            sum += arr[i];
        }
    }
    return sum;
}
function main() {
    let n = Number(prompt("Enter n :"));
    let arr = [];

    console.log(".\n --- Input Array Number ---");
    inputArrayNumber(arr,n);

    console.log(".\n --- Output Array Number ---");
    outputArrayNumber(arr,n);

    let sum = sumOddArray(n,arr);
    console.log(".\n --- Sum odd Array Number ---" , + sum);
}
main();