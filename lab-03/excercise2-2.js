//Nhập vào tháng của 1 năm Cho biết tháng đó thuộc quí mấy trong năm.
var m = Number(prompt("Enter month :"));
switch (m) {
    case 1:
    case 2:
    case 3:
        console.log("The 1st quarter");
        alert("The 1st quarter");
        break; 
    case 4:
    case 5:
    case 6:
        console.log("The 2nd quarter");
        alert("The 2nd quarter");
        break; 
    case 7:
    case 8:
    case 9:
        console.log("The 3rd quarter");
        alert("The 3rd quarter");
        break; 
    case 10:
    case 11:
    case 12:
        console.log("The 4th quarter");
        alert("The 4th quarter");
        break;
    default:
        console.log(`Not month ${m} in year`);
        alert(`Not month ${m} in year`);
        break;      
}
