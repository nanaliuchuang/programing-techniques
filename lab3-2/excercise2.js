// Nhập điểm (nhap)
var prompt = require('prompt-sync')();
var point = {
    x: 0,
    y: 0
}
function inputPoints(){
    point.x = Number(prompt("Enter x :"));
    point.y = Number(prompt("Enter y :"));
    return point;
}
// Xuất điểm (xuat)
function ouputPoints(){
    console.log("P=(" + point.x + "," + point.y+")");
}
// Tính khoảng cách giữa 2 điểm (khoangcach)
var pointA = {
    x: 0,
    y: 0
}
var pointB = {
    x: 0,
    y: 0
}
function caculateDistance(pointA,pointB){

    pointA.x = Number(prompt("Enter x of point A :"));
    pointA.y = Number(prompt("Enter y of point A :"));

    pointB.x = Number(prompt("Enter x of point B :"));
    pointB.y = Number(prompt("Enter y of point B :"));

    let distance = Math.sqrt((pointB.x - pointA.x) * (pointB.x - pointA.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));

    return distance;
}
function main(){

    inputPoints();

    ouputPoints();

    console.log("Distance of Oxy is ", caculateDistance(pointA,pointB));
}

main();