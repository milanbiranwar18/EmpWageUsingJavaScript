console.log("Wellcome to the Employee Wage Problem")

 //UC1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%2;
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))

if (empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}
