/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:



• Test whether an item is not in a array*/

// Tests for equality and inequality with strings
const str1:string = "Hello";
const str2:string = "hello";
console.log(str1 == str2); // False
console.log(str1 !== str2); // True

// Tests using the lower case function
const text1:string = "Hello";
const text2:string = "hello";
console.log(text1.toLowerCase()===text2);//True
console.log(text1.toLowerCase()!==text2);//False

/*Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to*/

let num : number = 5;
let num2: number = 15;
console.log( num === num2); //False
console.log( num !== num2); //True
console.log( num <= num2); //True
console.log( num >= num2); //False
console.log( num < num2); //True
console.log( num > num2); //False
// • Tests using "and" and "or" operators

const x:number = 5;
const y:number = 10;
const z:number = 20;

console.log(x < y && y < z);//True, both conditions are true
console.log(x < y || y > z); // True, atleast one condition is true
console.log(x > y && y > z); // False, both conditions are false
console.log(x > y || y < z); // True, atleast one condition is true

// • Test whether an item is in a array

const fruit:string [] = ["Banana","Apple","Orange","Peach","Mango","Strawberry"]

console.log("Fruits in array:",fruit.includes("Banana"));//True
console.log("Fruits not in array:",fruit.includes("Watermelon")); //False

const colors:string []= ["Red","Blue","Green","Purple","Yellow"];

console.log("Colors in array:",colors.includes("Red"));//True

console.log("Colors not in array:",colors.includes("White")); //False


export{};