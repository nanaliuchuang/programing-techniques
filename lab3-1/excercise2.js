// Viết hàm tìm “giá trị dương đầu tiên” trong mảng. Nếu mảng không có giá trị dương thì trả về giá trị -1 (duongdau)
function findFirstArrayNumber(n,arr){
    let first = -1;
    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            first = arr[0];
        }
    }
    return first;
}
// Viết hàm tìm “số chẵn cuối cùng” trong mảng. Nếu mảng không có giá trị chẵn thì trả về giá trị -1 (chancuoi)
function findLastEvenNumber(n,arr){
    let last = -1;
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 === 0){
            last = arr[i];
        }
    }
    return last;
}
// Viết hàm tìm “một vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất” trong mảng 1 chiều.(vitrinhonhat)
function findSmallestNumber(n,arr){
    let small = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] < small){
            small = arr[i];
        }
    }
    return small;
}
// Viết hàm tìm “giá trị dương nhỏ nhất” trong mảng. Nếu mảng không có giá trị dương thì trả về giá trị -1 (duongnhonhat)
function findSmallPositiveNumber(n,arr){
    let min = -1;
    for(let i = 0; i < n; i++){
        if(min == -1 || min > arr[i]){
            if(arr[i] > 0){
            min = arr[i];
            }
        }
    }
    return min;
}
function main(){
    let arr = [24, 45, -10, 8, -2, 23, 13, 43, -1];
    let n = arr.length;

    console.log("Find first value number bigger than 0 is " + findFirstArrayNumber(n,arr));

    console.log("Find last even number in array is " + findLastEvenNumber(n,arr));

    console.log("Find the smallest value number in array is " + findSmallestNumber(n,arr));

    console.log("Find small positive number in array is " + findSmallPositiveNumber(n,arr));
}
main();