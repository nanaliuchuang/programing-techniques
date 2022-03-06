// Khởi tạo mảng các Object để lưu trữ danh sách các đối tượng xe hơi như ví dụ trên và có sử dụng Property Shorthand, Computed Property Names.
let n = "Name";
let c = "Color";
let ca = "Capcity";
let car1 = {
    [n]: "BMW",
    [c]: "Red",
    [ca]:4,
}
console.log(car1);
let car2 = {
    [n]: "Audi",
    [c]: "Green",
    [ca]: 8
}
console.log(car2);
let car3 = {
    [n]: "BMW",
    [c]: "Blue",
    [ca]: 6
}
console.log(car3);
let car4 = {
    [n]: "Merc",
    [c]: "Green",
    [ca]: 4
}
console.log(car4);