// Sử dụng đối tượng Map ở bài 1, chuyển đổi sang đối tượng Set.
const car1 = new Object();
car1.name = "BMW";
car1.color = "Red";
const car1detail = new Object();
car1detail.capapcity = 4;
const car2 = new Object();
car2.name = "Audi";
car2.color = "Green";
const car2detail = new Object();
car2detail.capapcity = 8;
const car3 = new Object();
car3.name = "BMW";
car3.color = "Blue";
const car3detail = new Object();
car3detail.capapcity = 6;
const car4 = new Object();
car4.name = "Merc";
car4.color = "Green";
const car4detail = new Object();
car4detail.capapcity = 4;
const cars = new Map();
cars.set(car1,car1detail);
cars.set(car2,car2detail);
cars.set(car3,car3detail);
cars.set(car4,car4detail);
console.log(cars);

const set = new Set(cars);
console.log(set);