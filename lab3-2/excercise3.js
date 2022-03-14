// Nhập tam giác (nhap)
var prompt = require('prompt-sync')();
var triagleedge = {
    a: 0,
    b: 0,
    c: 0
}
function inputTriagleege(){

    triagleedge.a = Number(prompt("Enter edge a :"));
    triagleedge.b = Number(prompt("Enter edge b :"));
    triagleedge.c = Number(prompt("Enter edge c :"));

    return triagleedge;
}
// Xuất tam giác (xuat)
function outputTriggleEdge(){
    if( triagleedge.a < triagleedge.b + triagleedge.c && triagleedge.b < triagleedge.a + triagleedge.c && triagleedge.c < triagleedge.a + triagleedge.b ){
        if( triagleedge.a * triagleedge.a == triagleedge.b * triagleedge.b + triagleedge.c * triagleedge.c || triagleedge.b * triagleedge.b == triagleedge.a * triagleedge.a + triagleedge.c * triagleedge.c || triagleedge.c * triagleedge.c == triagleedge.a * triagleedge.a + triagleedge.b * triagleedge.b){
            console.log("This is a right triangle");
        }
        else if(triagleedge.a == triagleedge.b && triagleedge.b == triagleedge.c){
            console.log("This is an equilateral triangle");
        }
        else if(triagleedge.a == triagleedge.b || triagleedge.a == triagleedge.c || triagleedge.b == triagleedge.c){
            console.log("This is an isosceles triangle");
        }
        else if(triagleedge.a * triagleedge.a > triagleedge.b * triagleedge.b + triagleedge.c * triagleedge.c || triagleedge.b * triagleedge.b > triagleedge.a * triagleedge.a + triagleedge.c * triagleedge.c || triagleedge.c * triagleedge.c > triagleedge.a * triagleedge.a + triagleedge.b * triagleedge.b){    
            console.log("This is an acute triangle");
        }
        else
            console.log("This is an acute triangle");
    }
    return "The three sides a, b, c are not the three sides of a triangle";
}
// Tính chu vi tam giác (chuvi)
function perimeterTriangle(){
    let p = triagleedge.a + triagleedge.b + triagleedge.c;
    return p;
}
// Tính diện tích tam giác (dientich)
function areaTriangle(P){
    let h = (triagleedge.a + triagleedge.b + triagleedge.c) / 2;//h:half the perimeter of the triangle
    let s = Math.sqrt(h*(h - triagleedge.a)*(h - triagleedge.b)*(h - triagleedge.c));
    return s;
}
function main(){

    inputTriagleege();

    outputTriggleEdge();

    console.log("Perimeter of the triangle is", perimeterTriangle());

    console.log("Area of the triangle is", areaTriangle());

}
main();