 let name = "John Doe";
//  console.log("Hello World");
//  name="srimal"
 console.log(name);
//  alert("Hello " + name);

let age=24;
let isUnderage=true;
let customer={}
let customers= []
let salary=50000;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isUnderage);
console.log(typeof customer);
console.log(typeof customers);
console.log(typeof salary);

let a = 10;

let b="10";

console.log(a==b);
console.log(a===b);

let x=30;
let y=20;


if(x>y){
    console.log("x is greater than y");
}
else if(x<y){
    console.log("x is less than y");
}

else{
    console.log("x is equal to y");
}


let day=2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


function add(a,b){
    return a+b;
}

let anser=add(10,20);
console.log(anser);


let numbers=[1,"sman",2,3,4,5];

for(let i=0;i<numbers.length;i++){
  console.log(numbers[i]);
}