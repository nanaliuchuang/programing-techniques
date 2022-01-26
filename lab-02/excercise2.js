//tinh nghiem cua chuong trinh voi 2 so nguyen a,b
var a = prompt("Nhap vao so nguyen a:");
var b = prompt("Nhap vao so nguyen b");
if(a == 0){
    console.log("Phuong trinh vo nghiem");
}
else if(b == 0){
    console.log("Phuong trinh vo so nghiem");
}
else{
    x = -b/a;
    console.log(x);
}