//Khởi tạo các Set để lưu trữ danh sách các đối tượng xe hơi như ví dụ.
const cars = new Set();
const car1 = {
    name: "BMW",
    color: "Red",
    capacity: 4,
}
const car2 = {
    name: "Audi",
    color: "Green",
    capcity: 8,
}
const car3 = {
    name: "BMW",
    color: "Blue",
    capacity: 6,
}
const car4 = {
    name: "Merc",
    color: "Green",
    capacity:4,
}
cars.add(car1);
cars.add(car2);
cars.add(car3);
cars.add(car4);
console.log(cars);