// Nhập phân số (nhapphanso)
// var prompt = require('prompt-sync')();
var fraction = {
    numberator: 0,
    denominator: 0
}
function inputFraction() {
    fraction.numberator = Number(prompt("Enter numberator :"));
    fraction.denominator = Number(prompt("Enter denominator :"));
    return fraction;
}
// Xuất phân số (xuatphnso)
function outputFraction() {
    console.log(fraction.numberator + "/" + fraction.denominator);
}
// Tìm ước chung lớn nhất (UCLN)
function findGCD(a, b) {
    // GCB: Greatest Common Divisor
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}
// Rút gọn phân số (rutgonphanso)
function reduceFraction(fraction) {
    let fractionGCB = findGCD(fraction.numberator, fraction.denominator);
    fraction.numberator = fraction.numberator / fractionGCB;
    fraction.denominator = fraction.denominator / fractionGCB;
    return fraction.numberator + "/" + fraction.denominator;
}
// Tính tổng 2 phân số (tongphanso)
let fractionX = {
    numberator: 1,
    denominator: 2
}
let fractionY = {
    numberator: 2,
    denominator: 3
}
function sumFractions(fractionX, fractionY) {

    let fractionTemp = new Object();
    fractionTemp.numberator =

        (fractionX.numberator * fractionY.denominator) +
        (fractionY.numberator * fractionX.denominator);

    fractionTemp.denominator =

        fractionX.denominator * fractionY.denominator;

    return fractionTemp.numberator + "/" + fractionTemp.denominator;
}
// Tích 2 phân số (tichphanso)
function multiplyFractions(fractionX, fractionY) {

    let fractionTemp = new Object();
    fractionTemp.numberator =

        fractionX.numberator * fractionY.numberator;

    fractionTemp.denominator =

        fractionX.denominator * fractionY.denominator;

    return fractionTemp.numberator + "/" + fractionTemp.denominator;

}
// Kiểm tra phân số tối giản (kiemtraphansotoigian)
function isSimplestFraction(fraction) {

    let result = findGCD(

        fraction.numberator, fraction.denominator);

    if (result == 1) {
        return true;
    }
    return false;

}
// Kiểm tra phân số dương (kiemtraphansoduong)
function isPositiveFraction(fraction) {

    if (fraction.numberator * fraction.denominator > 0) {
        return true;
    }
    return false;

}
// Quy đồng 2 phân số (quydongmau)
function homogenizeDenominator(fractionX, fractionY) {
    let bc = fractionX.denominator * fractionY.denominator;
    fractionX.numberator = fractionX.numberator * fractionY.denominator;
    fractionY.numberator = fractionY.numberator * fractionX.denominator;
    fractionX.denominator = bc;
    fractionY.denominator = bc;

    console.log("Homogenize Denominator is " + bc);
}
// So sánh 2 phân số (sosanhphanso)
function compareFractions(fractionX, fractionY) {

    let a = fractionX.numberator / fractionX.denominator;
    let b = fractionY.numberator / fractionY.denominator;
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1
    }
    return 0;
}
function main() {

    inputFraction();

    outputFraction();

    console.log("Greatest Common Divisor of a and b is ", findGCD(7, 5));

    console.log("Checking for minimal fractions", reduceFraction(fraction));

    console.log("Sum of 2 fractions is", sumFractions(fractionX, fractionY));

    console.log("Multiply of 2 fractions is", multiplyFractions(fractionX, fractionY));

    console.log("Check simplest fraction ", isSimplestFraction(fraction));

    console.log("Check positive fraction ", isPositiveFraction(fraction));

    homogenizeDenominator(fractionX, fractionY);

    console.log(".\n --- Compare 2 fraction --- ", compareFractions(fractionX, fractionY));
}
main();