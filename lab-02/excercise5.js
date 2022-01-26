//tinh tong tien thue 
var pricesPhone = prompt("Nhap so tien cua IphoneX 64GB: ");
var pricescharger = prompt("Nhap gia tien cuc sac :");
var coupons = prompt("Nhap so tien phieu giam gia :");
const TAX_RATES = 0.08;//thue ban hang hien tai la 8%
confirm("Ban da nhap day du cac thong tin mon hang chua ?");
var  s = (Number(pricesPhone) + Number(pricescharger)) * TAX_RATES;
console.log("Tổng tiền thuế Tèo phải chịu là: " + s);
var result = (Number(pricesPhone) + Number(pricescharger) + s) - Number(coupons);
console.log("Tổng tiền Tèo phải thanh toán: " + result);
alert("Tổng tiền Tèo phải thanh toán: " + result);