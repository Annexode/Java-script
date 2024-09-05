document.write("Annexode the creator");
console.log("Annexode the creator");
document.write("Annexode the");

let namex = " Annnexode IGIRANEZA  ";
console.log(namex);

let state, province, district;
state = "Kigali";
province = "Rwanda";
district = "Nyarugenge";
let umugabo = "Jean Piere de Mutto";
console.log(state, province, district);
console.log(umugabo);

let random123_$ = "IGIRANEZA Annex";
console.log(random123_$);

let $random123_$ = "random";
console.log($random123_$);

// //VAR
var value = "Codding";
value = "May be programming is awesome";

// //LET
let adress = "Kibogora";
adress = "Nyamasheke";

// //CONST
const city = "Kigali";

console.log(value);
console.log(adress);
console.log(city);

let description = "This course is about the Javascript programming";
console.log(description);

const familyname = "Janvier";
const firstname = "Igy";
console.log("My firstname and familyname are :" + familyname + " " + firstname);

const website = "google";
const url = "http://www." + website + ".com";
console.log(url);

let numberA = 40;
numberA += 5;
numberA -= 2;
numberA++;
numberA *= 2;

//Dividing 10 slices to 4 Children without considering reminders (We will need to remove reminders from the 10/4 fraction)
const slices = 10;
const children = 4;
const amount = slices / children;
const amount2 = slices % children;

console.log(slices / 4 - amount2 / 4);

//Normal operation
const number2 = 10;
const number3 = 20;
const result = number2 + number3;

console.log(result);

//Operation which can read to formation of a bug

let number4 = "10";
let number5 = 20;
let result2 = number4 + number5;

console.log(result2);

//OR (Another example of bug's source code)
let number6 = 10;
let number7 = 20;
let number8 = 20;
let number9 = 20;
let number10 = "20";

let result3 = number6 + number7 + number8 + number9 + number10;

console.log(result3);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amounti").value;
  value = parseInt(value);
  console.log("Input value Type");
  console.log(value);
  console.log("Sum of Two numbers");
  console.log(randomNumber + value);
});

//TYPES OF DATA (PRIMIMTIMVE AND OBJECT)
// 1. String
const text = "Some texts";
console.log(typeof text);

// 2. Number
const number = 2;
console.log(typeof number);

// 3. Boolean
let value1 = true;
let value2 = false;
console.log(typeof value1);
console.log(typeof value2);

// 4. Undefined
let name;
console.log(typeof name);

// 5. Null
const reuslt = null;
console.log(typeof null);

// 6. Symbol (To be covered later)

//Arrays, Function Objects
//Arrays indexing start from zero

//Example one
const friends = [
  "Sibo",
  "Roger",
  "Emmy",
  "Liliane",
  "Fiona",
  "Mukiza",
  "Anny",
  "Yves",
  "Carine",
  "Dorcas",
];
let bestFriend = friends[0];
friends[9] = "Kellia";

console.log(friends);
console.log(bestFriend);

//Example two
const random = ["Umuntu", 42, null, undefined, "50"];

console.log(random);
console.log(random[0]);
console.log(random[1]);
console.log(random[4]);
console.log(random[7]);

//Functions + Declare + Invoke

//Example one
function annexode() {
  //logic is place inside this curly brace
  console.log("Annexode is going to be a hell of coder");
  console.log("But only if he does't give up learning");
  console.log("This is the way");
}

//Invoke 1
annexode();

//Invoke 2
annexode();

//Example two
function languages(language) {
  console.log("I speak" + " " + language);
}

languages("English");
languages("Russian");
languages("French");

//Example three

function proclaim(blessings) {
  console.log("I am " + "" + blessings);
}

proclaim("Loving");
proclaim("Caring");
proclaim("Resilient");
proclaim("Humble");
proclaim("Persistent");

//Inches to Cm
const wallHeight = 80;

function calculate(value) {
  const newValue = value * 2.54;
  // console.log("the value in cm: " + value * 2.54 + " cm");
  return newValue;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

//Km to miles example
const dist2 = 180;
const dist3 = 210;

function calculate(miles) {
  const newMiles = miles * 0.621371;
  return newMiles;
}

const distance1 = calculate(1);
const distance2 = calculate(dist2);
const distance3 = calculate(dist3);

const distances = [distance1, distance2, distance3];
console.log(distances);

//years to days
const x = 24;
function convert(yearstoDays) {
  const days = yearstoDays * 365;
  return days;
}

const a = convert(10);
const b = convert(15);
const c = convert(x);

const totalDays = [a, b, c];
console.log(totalDays);

//Example five
function addValues(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

const firstValue = addValues(2, 3, 6, -4);
const secondValue = addValues(4, 6, 8, 10);

const values = [firstValue, secondValue];
console.log(values);

//example six
const v = 1980;
const z = 1992;
function find(age) {
  const newAge = 2024 - age;

  return 2024 - age;
}

const reponse = find(v);
const pascal = find(1998);
const me = find(2000);
const jerrusa = find(z);
const sam = find(2004);
const merveille = find(2006);
const peace = find(2008);
const kwizera = find(2010);

const siblings = [reponse, pascal, jerrusa, sam, merveille, peace, kwizera];
console.log(siblings);

//Exercise 7

const whatIsGoingOn = "I am fucked";
function test() {
  console.log(whatIsGoingOn);
  console.log("Annexode is confused but trying to understand");
  console.log("Annexode is is trying to get up from his knees");
}

test();
test();

//Understanding javascript FUNCTIONS in deep / Crash course by FreeCodeCamp
// https://www.youtube.com/watch?v=j1laALb8OVM&list=PPSV

//First way of function definition
const defineMe = function () {
  console.log(
    "I am trying to define myslef using a damn function of Jacascript"
  );
};
defineMe();

const defineMewithparam = function (k, h) {
  console.log(k + h);
};

defineMewithparam(2, 1);

//Second way of function definition

function defineMetwo() {
  console.log(
    "I am trying to define myself using a damn function of Jacascript"
  );
}

defineMetwo();

function defineMetwowithparam(m, n) {
  console.log(m + n);
}

defineMetwowithparam(4, 5);

//Additional example
function testtwo(a, b) {
  let ret = a + b;
  let ret2 = a - b;
  return ret / ret2;
}
console.log(testtwo(3, 4));

const testTwoWithparam = function (a, b, c, d) {
  let ret = a + b + c + d;
  let ret2 = c + d - a + b;
  return ret / ret2;
};
console.log(testTwoWithparam(1, 2, 3, 4));
testTwoWithparam(6, 2, 4, 5);

function calc(a, b) {
  console.log(2 * (a + b));
}
calc(1, 2);

//Default parameters
function run(q, w = 3) {
  console.log(q + w);
}

run(1);

//Rest parameters
function restP(x, ...y) {
  console.log(x);
  console.log(y);
}

restP(1, 2, 3, 4, 5);

//Arrow function
const arrow = (x, y) => {
  return x + y;
};

console.log(arrow(1, 2));
//OR in simple manner
const arrow2 = (x, y) => x + y;

console.log(arrow2(3, 4));

//Nested functions
function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}

outer();

//Function scope
//Case one: Variables inside a function can not accesed from outside of the function
function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;
}
// console.log(x, y, z); can't access the x, y, z values because they are inside of the function

doSomething();

//Case two: Variables declared outside a function can be accessed within  the function
var ab = 10;
const cx = 20;
let cv = 30;

function doSomethingElse() {
  console.log(ab, cx, cv);
}

doSomethingElse();

//Closure
//example A
const myName = "Kyle";
function printName() {
  console.log(myName);
}

printName();

//example B
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

//CALL BACK It takes parameter as as function
//ANONYMOUS takes argument as function

// function foo(bar) {
//   bar();
// }
// console.log(foo(bar));

//HIGHER ORDER FUNCTION =>  Have one or more functions as arguments ans may a function

// function getCapture(camera) {
//   camera();
// }
// getCapture(function () {
//   console.log("canon");
// });

//IIFE
// function (){

// }

// (
//   function (){

//   }
// )

// function foo(){

// }
// function foo(){
//   console.log("foo")
//   foo();
// }

// foo();

// const anny = function annex(){
//   annex();
// }

//Invoking recursive functions
function recurse(){
  if(base_condition){
    // do something
    return;
  }
  recurse();
}

//example
function fetchWater(count){
  if(count ===0){
    console.log("No more water left");
    return;
  }
  console.log("Fetching water.......");
  fetchWater(count - 1);
}

fetchWater(10);