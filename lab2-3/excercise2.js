// Khai báo các hàm getter/setter cho các thuộc tính name, color, capacity của danh sách các đối tượng bên trên có sử dụng Method Properties.
let car1 = {
    name: "BMW",
    color: "Red",
    capacity: 4,
    getName:function(){
        return this.name;
    },
    getColor:function(){
        return this.color;
    },
    getCapacity:function(){
        return this.capacity;
    }
}
console.log("The first car name is " + car1.getName());
console.log("The first car color is " + car1.getColor());
console.log("The first car capacity is " + car1.getCapacity());
let car2 = {
    name: "BMW",
    color: "Red",
    capacity: 4,
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name;
    },
    setColor(color){
        this.color = color;
    },
    getColor(){
        return this.color;
    },
    setCapacity(capacity){
        this.capacity = capacity;
    },
    getCapacity(){
        return this.capacity;
    }
};
car2.setName("Audi");
console.log("The second car name is " + car2.getName());
car2.setColor("Green");
console.log("The second car color is " + car2.getColor());
car2.setCapacity(8)
console.log("The second car capacity is " + car2.getCapacity());
let car3 = {
    name: "Audi",
    color: "Green",
    capacity: 8,
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name;
    },
    setColor(color){
        this.color = color;
    },
    getColor(){
        return this.color;
    },
    setCapacity(capacity){
        this.capacity = capacity;
    },
    getCapacity(){
        return this.capacity;
    }
}
car3.setName("BMW");
console.log("The third car name is " + car3.getName());
car3.setName("Blue");
console.log("The third car color is " + car3.getColor());
car3.setCapacity(6);
console.log("The third car capacity is " + car3.getCapacity());
let car4 = {
    name: "BMW",
    color: "Blue",
    capacity: 6,
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name;
    },
    setColor(color){
        this.color = color;
    },
    getColor(){
        return this.color;
    },
    setCapacity(capacity){
        this.capacity = capacity;
    },
    getCapacity(){
        return this.capacity;
    }
}
car4.setName("Merc");
console.log("The 4th car name is " + car1.getName());
car4.setColor("Green");
console.log("The 4th car color is " + car4.getColor());
car4.setCapacity(4);
console.log("The 4th car capacity is " + car4.getCapacity());