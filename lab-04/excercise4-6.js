// Viết hàm liệt kê các phần tử chẵn và các phần tử lẻ trong mảng.
var prompt = require('prompt-sync')();

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
function countEvenNumber(n,arr){
    for( let i = 0; i <= n; i++){
        if ( arr[i] % 2 == 0){
            console.log(`Count even number in array is : ` + arr[i]);
        }
    }
}
function countOddNumber(n,arr){
    for( let i = 0; i <= n; i++){
        if ( arr[i] % 2 == 1){
            console.log(`Count odd number in array is : ` + arr[i]);
        }
    }
}
function main(){
    let arr = [];
    let n = Number(prompt("Enter n :"));

    console.log(".\n --- Input Array Number ---");
    inputArrayNumber(arr,n);

    console.log(".\n --- Output Array Number ---");
    outputArrayNumber(arr,n);
    
    console.log(".\n --- Count even number in array ---");
    countEvenNumber(n,arr);

    console.log(".\n --- Count odd number in array ---");
    countOddNumber(n,arr);
}
main();