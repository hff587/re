// let const

// String Number Boolean Null Undefined
// const user =  'John';
// const age = 30; 
// const rate=4.5;
// const isMarried = false;
// const userInfo = null;
// const userName = undefined;
// let z;
// console.log("my name is "+user+" and i am "+age+" years old");

// console.log(`my name is ${user} and i am ${age} years old`);

// const hello=`my name is ${user} and i am ${age} years old`;
// console.log(hello);

// const s="Hello,World,nihao";
// console.log(s.split(","));

// Array
// const num=new Array(1,2,3,4,5);
// console.log(num);

// const fruits=["apple","banana","orange",10,true];
// console.log(fruits);
// console.log(fruits[1]);
// const fruit=["apple","banana","orange"];
// fruit[3]="grapes";

// //末尾添加元素
// fruit.push=("mango");

// //头部添加元素
// fruit.unshift("kiwi");
// console.log(fruit);

// // 判断是否是数组
// console.log(Array.isArray(fruit));
// console.log(Array.isArray("banana"));

// // 查找元素在数组中的位置
// console.log(fruit.indexOf("banana"));

// //对象
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:30,
//     hobbies:["music","movie","sports"],
//     address:{
//         street:"50 main st",
//         city:"Boston",
//         state:"MA"
//     }
// }

// console.log(person);

// console.log(person.firstName,person.lastName);

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {firstName,lastName,address:{city}}=person;
// console.log(firstName,lastName,city);
// person.email="john@gmail.com";
// console.log(person);

// //对象数组
// const todos=[
//     {
//         id:1,
//         text:"Take out trash",
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:"Meeting with boss",
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:"Dentist appt",
//         isCompleted:false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);
// const todoJSON=JSON.stringify(todos);
// console.log(todoJSON);

//if条件语句

//==表示值相等，数据类型不同也会判断为true
//=====表示值和类型都相等

// const x="10";
// if(x==10){
//     console.log("x is 10");
// }else{
//     console.log("x is not 10");
// }
// if(x===10){
//     console.log("x is 10");
// }else{
//     console.log("x is not 10");
// }

// const x=6;
// const y=10;

// // if(x==10){
// //     console.log("x is 10");
// // }else if(x>10){
// //     console.log("x is greater than 10");
// // }else{
// //     console.log("x is less than 10");
// // }

// // ||表示或，&&表示与
// if(x>5 || y>5){
//     console.log("x is greater than 5 or y is greater than 5");
// }
// if(x>5 && y>5){
//     console.log("x is greater than 5 and y is greater than 5");
// }

//三目运算符
// const x=11;
// const color =x>10?'red':'blue';
// console.log(color);

// switch语句
// const x=10;
// const color =x>10?'red':'blue';
// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

//循环for和while
//for
for(let i=0;i<10;i++){
    console.log(i);
    console.log(`for loop number:${i}`);
}
//while
let i=0;
while(i<10){
    console.log(`while loop number:${i}`);
    i++;
}
// //数组循环
// const todos=[
//     {
//         id:1,
//         text:"Take out trash",
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:"Meeting with boss",
//         isCompleted:true
//     },
//     {
//         id:3,
//         text:"Dentist appt",
//         isCompleted:false
//     }
// ];
// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo.text);
// }
