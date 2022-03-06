// Tìm 1 ví dụ bất kỳ có sử dụng cả Callback và Asynchronous khác với ví dụ trên slides.
function caculator(anything){
    console.log(anything);
}
function caculatorDivide(a,b,myCallback){
    let divide =  a * b;
    myCallback(divide);
}
function caculatorSubtraction(a,b,myCallback){
    let subtraction = a - b;
    myCallback(subtraction);
}
function caculatorMultiplication(a,b,myCallback){
    let multiplication = a / b;
    myCallback(multiplication);
}
caculatorDivide(10,4,caculator);

caculatorSubtraction(19,3,caculator);

caculatorMultiplication(50,10,caculator);

setTimeout(myFunction, 1000);
function myFunction(){
    console.log("Hello World");
}
