// Nhập Mảng phân số
var prompt = require('prompt-sync')();
class Fraction{
    constructor(numerator,demonirator){
        this.numerator = numerator;
        this.demonirator = demonirator;
    }
}
function inputFraction(n,fraction){
    for(let i = 0; i < n; i++){
        let newfraction = new Fraction();
        newfraction.numerator = Number(prompt("Enter numerator :"));
        newfraction.demonirator = Number(prompt("Enter demonirator :"));
        fraction[i] = newfraction.numerator + "/" + newfraction.demonirator;
    }
}
// Xuất mảng phân số
function outputFraction(n,fraction){
    for(let i = 0; i < n; i++){
        console.log(fraction[i]);
    }
}
// Đếm số lượng phân số dương trong mảng
function countArrayFraction(n,fraction){
    let count = 0;
    for(let i = 0; i < n; i++){
        if(fraction[i].numerator > 0 && fraction[i].demonirator > 0 ){
            count++;
        }
    }
    return count++;
}
// Sắp xếp mảng phân số tăng dần
function accendingbyInterchangeSort(n,fraction){
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j = n - 2; j++){
        if(fraction[i].numerator / fraction[i].demonirator > fraction[j].numerator / fraction[j].demonirator){
            let temp = fraction[i];
            fraction[i] = fraction[j];
            fraction[j] = temp;
        }
        }
    }
}
function main(){
    let fraction = [];
    let n = Number(prompt("Enter n :"));

    inputFraction(n,fraction);

    console.log(".\n --- Ouput Array Fraction ---");
    outputFraction(n,fraction);

    console.log("Count the number of positive fractions in the array is", countArrayFraction(n,fraction));

    console.log(".\n --- Accending By Interchange Sort ---");
    accendingbyInterchangeSort(n,fraction);
    outputFraction(n,fraction);
}
main();