// console.log('sahil');

// let age = 28;
// if (age >= 18){
//     console.log('You are allowed inside the Park');
// }

// else{
    
//     console.log('Out of the Park');
// }


/** Gender Entry **/

// let gender = prompt('Enter Gender');

// if (gender == 'male'){
//     console.log('No you are not allowed');
// }
// else if(gender == 'female'){
//     console.log('You are allowed');
// }

// else if (gender == 'other'){
//     console.log('You are not allowed');
// }
// else{
// console.log('you are ');
// }



/** Room No **/


// let standard = 1;

// if (standard == 1){
//     console.log('Room One');
// }
// else if (standard == 2){
//     console.log('Room Two');
// }
// else if(standard == 3 ){
//     console.log('Room Number 3');
// }

// else{
// console.log('You are Principal');
// }

// Rating mini app

// let rating = 8;

// if (rating == 1){
//     console.log('Very Bad');
// }
// else if (rating == 2){
//     console.log('Bad');
// }
// else if (rating == 3){
//     console.log('good');
// }
// else if (rating == 4){
//     console.log('Very good');
// }
// else if (rating == 5){
//     console.log('Excellent');
// }

// else{
//     console.log('No Comments');
// }

// let user = 'admin';

// switch (user){
// case 'admin':
//     console.log('Redirect Him/Her to the Admin Page');
//     break;
//     case 'mentor':
//         console.log('Redirect Him/Her to the Mentor Dashboard');
//         break;

//         default:
//             console.log('I am Simple User')
// }

// let ratingApp = '1 Star';

// switch (ratingApp){
//     case'1 Star':
//     console.log('Very Bad');
//     break;

//     case'2 stars':
//     console.log('Bad');
//     break;

//     case'3 stars':
//     console.log('Good');
//     break;

//     case'4 stars':
//     console.log('Very GGood');
//     break;

//     default:
//     console.log('Excellent');
// }


// Ternary Opeartor / Ternary condition 

// Condition ? = True, : = False

// let userlogin = true;
// userlogin ? console.log('logout') : console.log('login');
 
// Array

// let name = [
//     'Wakash',
//     'Ashish',
//     'Rahul',
//     'Sahil',
//     'Gharo',
// ];

// console.log(name);
// console.log(name[3]);


//Objects

// let bankaccount ={
//     firstname: 'Sahil',
//     lastname: 'Oad',
//     mobileno: '92030000000',
//     balance: '10000',
// };

// console.log(bankaccount);
// console.log(bankaccount.balance);

// Date and Math

// const now = new Date();
// console.log(now.toString());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());

// console.log(now.getTime());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// Math 

// const PI = Math.PI;
// console.log(PI);

// console.log(Math.round(PI));
// console.log(Math.round(9.4));

// console.log(Math.floor(9.5));
// console.log(Math.ceil(9.5));

// Min & Max 

// console.log(Math.min(10,1,2,3,4,5,6,7,8,9));
// console.log(Math.max(10,1,2,3,4,5,6,7,8,9));

// Random

// console.log(Math.round(Math.random() * 51)); // 0-0.999999999999 (0-1)

// Power 

// console.log(Math.pow(3,4));

//Log

// console.log(Math.log(2));

//Degrees

// console.log(Math.sin(120));

// Loops
// Do While, While, for

// let i = 1;
// do {
//     console.log('Value of i is :', i);
//     i++;
// } while (i <= 5);


// let j = 6;
// while(j <= 10){
//     console.log('Value of j is :', j);
//     j++;
// }

// For 

// for (let i = 0; i <= 10; i++){
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// Array In Depth and For of loop


// console.log(names);
// console.log(names.length); //Length of array

// console.log(names[3]);
// console.log(names[names.length - 1]);

// //want to add name between them

// names[4] = 'Gharo';
// console.log(names);

// let namess = new Array('name 1', 'name 2'); // A way of decalre a Array // Not to recod
// console.log(namess);


//Push => Insert New values inside the array

// names.push('Ivoo');
// console.log(names);

//Slice => it will put the values we want

// let names = ["Hitesh", "Sahil", "Rahul", "Mudi", "Musa"];
// // console.log(names.slice(1,3));

// //Splice 
// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.splice(2,0, 'Kharab Apple', 'Acha Apple');
// console.log(fruit);

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let arr3 = [9,10,11,12];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2,arr3));

// Fill

// let arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.fill('Iliana', 2, 4);
// console.log(arr4);

// include

// let num =[1,2,3,4,5,6,7,8,9];
// console.log(num.includes(7,6));

// Indexof

// let num = [1,2,'Sahil',3,4,5,'Sahil',6,'Sahil',7,8,9];
// console.log(num.indexOf('Sahil'));


//is Array
// let num = [1,2,'Sahil',3,4,5,'Sahil',6,'Sahil',7,8,9];
// let num1 = 1;
// console.log(Array.isArray(num));
// console.log(Array.isArray(num1));

// //join

// let arr1 = [1,2,3,4,5,6,7,8];
// let var1 = arr1.join('1');
// console.log(typeof var1);

//Last indexOf

// let num = [1,2,'Sahil',3,4,5,'Sahil',6,'Sahil',7,8,9];
// console.log(num.lastIndexOf('Sahil'));

// Map
// let maths = [1,4,9,16,25];
// console.log(maths.map(Math.sqrt));
// console.log(maths);

// Pop

// let maths = [1,2,3,4,5,6];
// console.log(maths.pop());
// console.log(maths);

// Reverse

// let maths = [1,4,9,16,25];
// console.log(maths.reverse());

// //Shift 
// let maths = ['Sahil',1,2,3,4,5,6,7,8];
// console.log(maths.shift());

// Sorts

// let names = ["Hitesh", "Sahil", "Rahul", "Mudi", "Musa"];
// console.log(names.reverse(names.sort()));

// Unshift

// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// fruit.unshift('Kharab Apple 2', 'Acha Apple 2');
// // console.log(fruit.unshift('Kharab Apple 2', 'Acha Apple 2'));
// console.log(fruit);

// Converting to Array 

// let name = 'Sahil';
// let arry1 = name.split('');
// console.log(arry1)

//For of

// let fruit = ['Apple', 'Bada Apple', 'Chota Apple', 'Double Apple'];
// let upperFruit = [];
//  for (const badafruit of fruit){
//     upperFruit.push(badafruit.toUpperCase());
//  }

//  console.log(upperFruit);

// Break and Continue 

// for ( let i = 0; i <= 10; i++){
//     if (i==7){
//         break;
//     }
//     console.log(i);
// }

//Contin

// for ( let i = 0; i <= 5; i++){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }


//Function

// function myFunc(theObject) {
//     theObject.make = "Toyota";
//   }
  
//   const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//   };
  
//   console.log(myCar.make); // "Honda"
//   myFunc(myCar);
//   console.log(myCar.make); // "Toyota"



// function sum(value1, value2){
//     // let num1 = 16;
//     // let num2 = 44;
  
  
//     console.log('Addition of Two Number are: ',value1 + value2);
//   }
  
  
  
//   sum(22, 33);
//   sum(22,55);
//   sum(22,77);
//   sum(22,12);
//   sum(22,9);

// Normal Function and Funtion with parameters

// Function with return type

// function sum(val1, val2){
//     let result = val1 + val2;
//     return result;
// }

// let add = sum(10,22);
// console.log(add);

// let add1 = sum(15,12);
// console.log(add1);

// function URL(url,domain){
//     let con = 'https://';
//     let result = con + url + domain;
//     return result;
// }

// let sahilsite = URL ('sahil','.com')
// console.log(sahilsite);

// function sum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[1];
//     }
//     return sum;
// }

// let sumarray = [1,2,3,4,5,6,7,8];
// let arrresult = sum(sumarray);
// console.log(arrresult);

// function sahil(){
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum = sum + arguments[1];
//     }
//     return sum;
// }

// console.log(sahil(7,8,9,10,11,12,14,15));

// let jaimin = (var1, var2) => {
//     console.log('Main Bhagwan Hun', var1, var2);
// }

// jaimin(1,2);

//Object

// let userName = {
//     firstname: 'Sahil',
//     lastname: 'Oad',
//     role: 'admin',
//     loginCount: 25,
// }

// console.log(userName.role);

// userName.loginCount = 61;
// console.log(userName);

// for (let x in userName){
//     console.log(userName[x]);
// }

//Object

// const object = {
//     rocket: '🚀',
//     home: '🏡',
// }

// // string, number, bigint, boolean, null, undefine, symbol,

// const obj1 = {
//     rocket: '🚀',
//     fuel: 2,
//     config:{
//         name: 'mars'
//     }
// }

// obj1.fuel = 200,
// obj1['year'] = 2000

// console.log(obj1)

// exp 2

// const obj2 = new Object()
// obj2.redbook = '📕',
// obj2.myValue = '1 blue book'

// console.log(obj2);

// exp 3

// const powers = {
//     fly: true,
//     cordinate: Math.random() + 2
// }

// const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

// EXP 4

// const obj4 = Object.create({})
// Object.defineProperty(obj4, 'book', {
//   // icon: '🎈'
//   get: () => '🎈', 
//   enumerable: true
// })

// // console.log(obj4);
// // console.log(obj4.book);
// // console.log(Object.getPrototypeOf(obj4));

// for (k in obj4){
//   console.log("Value is: ", k);
// }

let pen = 'sahil'

// EXP 5

const obj5 = {
  comics : 'marvel',
  pen: '',
  printComic: function(){
  this.pen += '🖊'  
  console.log(this);
}, 
// printaComic: () => {
//   // this.pen += '🖊'   
//   console.log(this);
//   }
// }

console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());