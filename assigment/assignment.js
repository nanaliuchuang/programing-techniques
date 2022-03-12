var prompt = require('prompt-sync')();
class Employee {
    constructor(id, fullName, baseSalary, productSalary, productQuanity, actuallySalary) {
        this.id = id;
        this.fullName = fullName;
        this.baseSalary = baseSalary;
        this.productSalary = productSalary;
        this.productQuanity = productQuanity;
        this.actuallySalary = actuallySalary;
    }
}
// Nhập số lượng n nhân viên cần quản lý, với n và các thông tin của từng nhân viên được nhập từ bàn phím.
function inputArrayEmployees(n, employee) {
    for (let i = 0; i < n; i++) {
        let newEmployee = new Employee();
        newEmployee.id = Number(prompt("Enter employee " + i + " id:"));
        newEmployee.fullName = prompt("Enter employee " + i + " full name:");
        newEmployee.baseSalary = Number(prompt("Enter employee " + i + " base salary:"));
        newEmployee.productSalary = 50;
        newEmployee.productQuanity = Number(prompt("Enter employee " + i + " product quanity:"));
        newEmployee.actuallySalary = null;
        employee[i] = newEmployee;
    }
}
// Xuất danh sách nhân viên vừa nhập ra màn hình.
function outputArrayEmployees(n, employee) {
    for (let i = 0; i < n; i++) {
        console.log(employee[i]);
    }
}
// Tính lương của từng nhân viên
function sumSalary(n, employee) {

    for (let i = 0; i < n; i++) {
        let productSalaryGoals = employee[i].baseSalary + employee[i].productSalary * employee[i].productQuanity;

        if (employee[i].productQuanity == 50) {
            employee[i].actuallySalary = productSalaryGoals;
        } else if (employee[i].productQuanity > 50) {
            let productQuantityExceedGoals = employee[i].productQuanity - 50;
            let productSalaryExceedGoals = (employee[i].baseSalary + employee[i].productSalary * productQuantityExceedGoals) * 0.1;// 0.1 = 10%
            employee[i].actuallySalary = productSalaryGoals + productSalaryExceedGoals;
        } else if (employee[i].productQuanity < 50) {
            let productQanityLow = employee[i].productQuanity + 50;
            let productSalaryLow = (employee[i].baseSalary + employee[i].productSalary * productQanityLow) * 0.1;
            employee[i].actuallySalary = productSalaryGoals - productSalaryLow;
        }
    }
}
// điểm): Sắp xếp danh sách nhân viên tăng dần theo tổng lương
function sortAccendingbyInterchangeSort(n, employee) {
    for (let i = 0; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            if (Number(employee[i].actuallySalary) > Number(employee[j].actuallySalary)) {
                let temp = employee[i];
                employee[i] = employee[j];
                employee[j] = temp;
            }
        }
    }
}
// Tìm kiếm những nhân viên có tổng lương cao nhất
function findMaxSumSalary(n, employee) {
    let max = employee[0];
    for (let i = 0; i < n; i++) {
        if (max.actuallySalary < employee[i].actuallySalary) {
            max = employee[i];
        }
    }
    return max;
}
// Sửa thông tin một nhân viên theo mã nhân viên
function editInformationEmployee(n, employee) {
    for (let i = 0; i < n; i++) {
        if (employee[i].id === 2) {
            employee[i].fullName = prompt("Enter name need edit is :");
            employee[i].baseSalary = Number(prompt("Enter base salary need edit is :"))
            employee[i].productQuanity = Number(prompt("Enter product quanity need edit is :"));
            let productSalaryGoals = employee[i].baseSalary + employee[i].productSalary * employee[i].productQuanity;

            if (employee[i].productQuanity == 50) {
                employee[i].actuallySalary = productSalaryGoals;
            } else if (employee[i].productQuanity > 50) {
                let productQuantityExceedGoals = employee[i].productQuanity - 50;
                let productSalaryExceedGoals = (employee[i].baseSalary + employee[i].productSalary * productQuantityExceedGoals) * 0.1;// 0.1 = 10%
                employee[i].actuallySalary = productSalaryGoals + productSalaryExceedGoals;
            } else if (employee[i].productQuanity < 50) {
                let productQanityLow = employee[i].productQuanity + 50;
                let productSalaryLow = (employee[i].baseSalary + employee[i].productSalary * productQanityLow) * 0.1;
                employee[i].actuallySalary = productSalaryGoals - productSalaryLow;
            }
        }
    }
}
// Xóa một nhân viên theo mã nhân viên
function deleteEmployee(n,employee){
    for(let i = 0; i < n; i++){
        if(employee[i].id === 3){
            delete employee[i];
        }
    }
}
function main() {
    let employee = [];
    let n = Number(prompt("Enter n :"));

    console.log(".\n --- Input Array Employees ---");
    inputArrayEmployees(n, employee);

    console.log(".\n --- Output Array Employees ---");
    outputArrayEmployees(n, employee);

    sumSalary(n, employee);

    console.log(".\n --- Employees After Calculating Salary ---");
    outputArrayEmployees(n, employee);

    console.log(".\n --- Accending by Interchange Sort ---");
    sortAccendingbyInterchangeSort(n, employee);
    outputArrayEmployees(n, employee);

    console.log("The employee have max sum salary is", findMaxSumSalary(n, employee));

    console.log("The information employee edited is ");
    editInformationEmployee(n, employee)
    outputArrayEmployees(n, employee);

    console.log(".\n --- List employee after delete ---");
    deleteEmployee(n,employee);
    outputArrayEmployees(n,employee);
}
main();