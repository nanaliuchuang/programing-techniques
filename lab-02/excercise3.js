//viet chuong trinh tinh tong diem
var scoreMath = prompt("Nhap vao diem mon Toan");
var scorePhysics = prompt("Nhap vao diem mon Ly");
var scoreChemistry = prompt("Nhap vao diem mon Hoa");
var sum = Number(scoreMath) + Number(scorePhysics) + Number(scoreChemistry);//tong diem'
console.log(sum);
var average = sum /3;
console.log(average);