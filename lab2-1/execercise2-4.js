// Viết hàm đếm số lượng xe có màu xanh lá trong mảng. (countGreenCars)
var prompt = require('prompt-sync')();
class Car{
    constructor(name,color,capacity){
        this.name = name;
        this.color = color;
        this.capacity = capacity;
    }
}
function inputArrayCars(n,arr){
    for(let i = 0; i <= n; i++){
        let newCar = new Car();
        newCar.name = prompt("Enter car " + i + " name :");
        newCar.color = prompt("Enter car " + i + " color :");
        newCar.capacity = Number(prompt("Enter car" + i + " capacity :"));
        arr[i] = newCar;
    }
}
function outputArrayCars(n,arr){
    for(let i = 0; i <= n; i++){
        console.log(arr[i]);
    }
}
function countGreenCars(n,arr){
    let count = 0;
    for(let i = 0; i <= n; i++){
        if(arr[i].color === "Green"){
            count++;
            console.log(arr[i]);
        }
    }
    return count;
}
function main(){
    let n = Number(prompt("Enter n :"));
    let arr = [];

    console.log(".\n --- Inpur Array Cars ---");
    inputArrayCars(n,arr);

    console.log(".\n --- Output Array Cars ---");
    outputArrayCars(n,arr);

    console.log("Count of Green Cars is ", countGreenCars(n,arr));
}
main();