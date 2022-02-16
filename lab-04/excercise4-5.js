// Viết hàm nhập, xuất mảng có n phần tử.
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
function main(){
    let arr = [];
    let n = Number(prompt("Enter n"));

    console.log(".\n --- Input Array Number ---");
    inputArrayNumber(arr,n);

    console.log(".\n --- Output Array Number ---");
    outputArrayNumber(arr,n);
}
main();