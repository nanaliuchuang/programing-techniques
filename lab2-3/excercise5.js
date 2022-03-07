// Tìm 1 ví dụ bất kỳ có sử dụng cả Promise và Async/Await khác với ví dụ trên slides.
async function myCallback(){
    let myCar = new Promise(function(resolve){
        setTimeout(function() {resolve("This is my car!");},1000);
    });
    console.log(await myCar);
}
myCallback();
