//  let name = "John Doe";
// //  console.log("Hello World");
// //  name="srimal"
//  console.log(name);
// //  alert("Hello " + name);

// let age=24;
// let isUnderage=true;
// let customer={}
// let customers= []
// let salary=50000;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isUnderage);
// console.log(typeof customer);
// console.log(typeof customers);
// console.log(typeof salary);

// let a = 10;

// let b="10";

// console.log(a==b);
// console.log(a===b);

// let x=30;
// let y=20;


// if(x>y){
//     console.log("x is greater than y");
// }
// else if(x<y){
//     console.log("x is less than y");
// }

// else{
//     console.log("x is equal to y");
// }


// let day=2;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday"); 
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// function add(a,b){
//     return a+b;
// }

// let anser=add(10,20);
// console.log(anser);


// let numbers=[1,"sman",2,3,4,5];

// for(let i=0;i<numbers.length;i++){
//   console.log(numbers[i]);
// }



//Create a Object

// let customer1={
//     name:"Srimal",
//     age:24,
//     address:"241 getalawa",
//     salary:180000,
//     items:["item1","item2","item3"],
//     father:{
//         name:"John",
//         age:50,
//         address:"Colombo"
//     }
// }

// console.log(customer1.name);
// console.log(customer1.age);
// console.log(customer1.address);
// console.log(customer1.salary);
// console.log(customer1.items);
// console.log(customer1.father.name);
// console.log(customer1.father.age);
// console.log(customer1.father.address);
// console.log(customer1.father);



//------------------DOM MANIPULATION--------------------

// //DOM - Document Object Model

// console.log(document);

// let heading =document.getElementById("h1")
// heading.innerText="Srimal";
// console.log(heading);

//-------------------------------------------create cunstructor function

// class Customer{
//     name;
//     age;
//     addrerss;

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.addrerss=address;
//     }
// }

// let customer=new Customer("Srimal",24,"241 getalawa");
// console.log(customer);

//-------------------------secont way

let customer1={
    name:"Srimal",
    age:24,
    address:"241 getalawa"
}


// document.write("<h1>Srimal World</h1>");

console.log(customer1);
// console.log(document.title);_

let change=document.getElementById("h1");

console.log(change);

// h1.innerText="Srimal";
let number=0;
// function changeText(){
// console.log("Button clicked");
// h1.innerText="Srimal"+number++;


// }


//-------------------   Value increase and decrease-----------------

// function increaseValue(){
//     h1.innerText="Srimal"+( ++number);
//     console.log("value increased");
// }

// function decreaseValue(){
//     h1.innerText="Srimal"+(--number);
//     console.log("value decreased");
// }

// function changeText(){
//     let input=document.getElementById("input");
//     h1.innerText=input.value;
//     console.log("Button clicked");
// }


// ---------------------------------------------------------------------

//                  ADD and SUB Functions
                
// ---------------------------------------------------------------------



function add(){

    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    let result=parseInt(num1)+parseInt(num2);

    output.innerText="Result: "+result;
    console.log("Add button clicked");
}

function sub(){

    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    let result=parseInt(num1)-parseInt(num2);

    output.innerText="Result: "+result;
    console.log("Subtract button clicked");
}


