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
function recurse() {
  if (base_condition) {
    // do something
    return;
  }
  recurse();
}

//example
function fetchWater(count) {
  if (count === 0) {
    console.log("No more water left");
    return;
  }
  console.log("Fetching water.......");
  fetchWater(count - 1);
}

fetchWater(10);

//Conditional functions
const valuex = value;
if (2 < 1) {
  console.log("I am Annexode the coder");
} else {
  console.log("I am also the editor");
}

const person = {
  izina: "Annexode",
  iryakabiri: "IGIIRANEZA",
  amavuko: "3rd,January 2000",
  imyaka: 25,
  uburezi: true,
  married: false,
  abana: ["Anny", "Iigya", "peace"],
  indamukanyo() {
    console.log("I am also the [parent]");
  },
};

person.izina = "Igiraneza";
console.log(person.izina);
const iryakabiri = person.iryakabiri;
console.log(iryakabiri);
const imyaka = person.imyaka;
console.log(imyaka);
const amavuko = person.amavuko;
console.log(amavuko);

const num1 = 4;
const num2 = 4;
const results = num1 >= num2;

if (num1 > num2) {
  console.log("hello there");
} else if (results) {
  console.log("I dont't know how");
} else {
  console.log("hello hell");
}

const urukundo = false;

if (!urukundo) {
  console.log("I will go to the store");
}

//== Check only values
//=== Check values and data type
const umubare1 = 5;
const umubare2 = "5";

const agaciro = umubare1 == umubare2;
const agaciro2 = umubare1 === umubare2;

console.log(agaciro);
console.log(agaciro2);

//Logical Operators
//(|| or ) , (&&-And)

const degree = true;
const experience = true;

if (degree === true || experience === true) {
  console.log("Qualified");
}

const wisdom = true;
const humble = true;

if (wisdom === true && humble === true) {
  console.log("You are my type");
}

//Swith
//dice values ; 1 - 6
const dice = 1;

switch (dice) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
}

// if (dice === 1){
//   console.log("one");
// }

// if (dice === 2){
//   console.log("two");
// }

// if (dice < 1 || dice > 6){
//   console.log("I did not roll the dice")
// }

//loops
let amounti = 10;
while (amounti > 0) {
  console.log("i have" + amounti + "rwf and i am going to the market");
  amounti--;
}

// let money = 0;

// do{
//   console.log("I have" + money + "rwf and i am going to the market");
//   money++;
// }while (money < 10);

let money = 10;

do {
  console.log("i have " + "" + money + "rwf and i am going to the market");
  money++;
} while (money < 7);

// let i;
// for (i = 0; i < 10, i++) {
//   console.log("and the number is : " + i);
// }

for (let number = 11; number >= 0; number--) {
  console.log("and the number is : " + number);
}

//Summing everything together
let texti = " peter";
let resulti = texti.length;
console.log(texti.length);
console.log(texti.toLowerCase());
console.log(texti.toUpperCase());
console.log(texti.charAt(0));
console.log(texti.charAt(4));
console.log(texti.charAt(texti.length - 2));
console.log(texti.indexOf("p"));
console.log(texti.indexOf(" "));
console.log(texti);
console.log(texti.trim());
console.log(texti.startsWith(" peter"));
console.log(texti.trim().startsWith("peter"));
console.log(texti.includes("er"));
console.log(texti.slice(0, 2));
console.log(texti.slice(-5));

const namer = "john";
const age = 25;
const sentence = "Hey it's " + namer + " and he is " + age + " years old";

const annegi = `Hello it's ${namer} and he's ${age} years old.`;
console.log(annegi);

console.log(sentence);

const interuro = `I am called ${namer} and i am ${age} years old`;
console.log(interuro);

const units = 100;
const pricePerUnit = 500;
const totalPrice = units * pricePerUnit;
const budget = `I am going to the market to buy ${units} oranges and one cost ${pricePerUnit} which means i need to go with total amount of ${totalPrice}. And here is the simple math ${
  4 * 4
}`;

console.log(budget);
// console.log(resulti);
//Array properties and methods
let names = [
  "Annexode",
  "Reponse",
  "Pascal",
  "Jerussa",
  "Sam",
  "peace",
  "Kwizera",
  "Merveille",
];

//length
console.log(names.length);
console.log(names[names.length - 1]);

const lastNames = ["Pepper", "Onion", "Banana"];
const allNames = names.concat(lastNames);

console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift
allNames.unshift("IGIRANEZA");
console.log(allNames);

//shift
allNames.shift("IGIRANEZA");
allNames.shift("Reponse");
console.log(allNames);

const teams = ["barca", "APR", "tothenham", "gasogi"];
console.log(teams);

teams.unshift("barca");
console.log(teams);
teams.shift();
teams.shift();
teams.shift();
teams.shift();
teams.unshift("barca");
console.log(teams);

//Push add the beginning
teams.push("barca");
teams.push("Museveni");
console.log(teams);

//Pop add at the end
teams.pop();
teams.pop();
teams.pop();
teams.push("Niyonshuti");

console.log(teams);

//Splice - mutates original array
const amazina = ["umuntu", "umupira", "abagabo", "amakuru", "abasaza"];
console.log(amazina);
console.log(amazina.splice(0, 1));
console.log(amazina);
// console.log(amazina.splice(1,1))
// const specificNames = allNames.splice(2,1);
// console.log(specificNames);
// console.log(allNames);

//Arrays and for loo
const members = ["Rwanda", "Uganda", "DRC", "Burundi", "Tanzania", "Kenya"];
const membership = [":true"];
let stateship = [];

for (let i = 0; i < members.length; i++) {
  console.log(i);
  console.log(members[i]);
  stateship.push(`${members[i]} ${membership}`);
}

console.log(members);
console.log(stateship);

//Functions, return, if, arrays, for loop.
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  if (total > 100) {
    console.log(`You are spendind way too much`);
    return total;
  }
  console.log(`Uhhh looks like you are spending responsbly`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const totalPrices = calculateTotal([
  calculateTotal(gas) + calculateTotal(food),
]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  totalPrices: totalPrices,
});

// REFERENCE VS VALUE
//PRIMITIVE DATA TYPES
//STRINGS, NUMBER, BOOLEAN, UNDEFINED,NULL,
//ARRAYS, FUNCTIONS, OBJECT = OBJECT

const aa = 1;
let aa2 = a;
aa2 = 7;
console.log(`the first number is ${aa} and the second number is ${aa2}`);

let personx = { name: "ANNEXODE" };
let persony = personx;
persony.name = "IGIRANEZA";
console.log(
  `the first person is ${personx.name} and the second person is ${persony.name}`
);

//NULL VS UNDEFINED
const xy = 20 + null;
console.log(xy);

const yz = 20 + undefined;
console.log(yz);

//Conditions / runs if true or false
const valuez = 1 < 0;
valuez ? console.log("Value is true") : console.log("Value is false");

const annexodeAge = age >= 24;
const ageAnnexode = 24;
annexodeAge ? console.log("Yes , he is") : console.log("No , he is not");

//variable lookup
//{} - Code block
// function greetMorning(){
//   const myName = "Annexode";
//   audience = "Anny"
// console.log(`Good morning ${audience}, my name is ${myName}`);
// }

// greetMorning();

//CALL BACK FUNCTION

function morning() {
  console.log("Good morning Anny");
}

function greet(names, cb) {
  const myName = "Annexode";
  console.log(`${names}, my name is ${myName}`);
  cb();
}

greet("Anny", morning);
greet("Sibo", morning);

//Example 2
hello(goodbye);
function goodbye() {
  console.log("I am running JavaScript");
}
function hello(callback) {
  console.log("hello");
  callback();
}

//EXAMPLE 3

function hobby2() {
  console.log("And I love watching movies too");
}
function hobby(callback) {
  console.log("I love to play basketball");
  callback();
}

hobby(hobby2);

function hobby2() {
  document.getElementById("test2").textContent = "I love to play movies";
}

//example 4
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

sum(displayConsole, 5, 7);

function displayConsole(result) {
  document.getElementById("test").textContent = result;
}

//Powerfull arrays methods

const numbers = [0, 1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for each // does not return new array
// const people = [
//   { name: "Annexode", age: 25, position: "Leaner" },
//   { name: "Yves", age: 25, position: "Tutor" },
//   { name: "Benimana", age: 26, position: "Leaner" },
//   { name: "Elie", age: 23, position: "Leaner" },
// ];

// function displayPerson(person) {
//   console.log(person.age);
// }
// people.forEach(displayPerson);

//Example 2
const family = [
  {
    names: "Aime Reponse",
    age: 28,
    career: "Accountant",
    id: 1,
    income: 1300000,
  },
  {
    names: "Pascal Muragwa",
    age: 26,
    career: "Veterinary",
    id: 2,
    income: 1000000,
  },
  {
    names: "Annexode Igiraneza",
    age: 24,
    career: "Lab tech & Coder",
    id: 3,
    income: 400000,
  },
  {
    names: "Charite Jerusalem",
    age: 22,
    career: "Teacher",
    id: 4,
    income: 100000,
  },
  { names: "Samuel Cadet", age: 22, career: "Engineer", id: 5, income: 100000 },
  {
    names: "Merveille Mugisha",
    age: 22,
    career: "Medical Doctor",
    id: 6,
    income: 0,
  },
  {
    names: "Peace Museveniya",
    age: 22,
    career: "Accountant",
    id: 7,
    income: 0,
  },
  {
    names: "Mediatrice Kwizera",
    age: 22,
    career: "Medical Doctor",
    id: 8,
    income: 0,
  },
];
// function sibling(person){
//   console.log(person.names + " " + person.age + " ");
// }
// family.forEach(function (person){
//   console.log(person.names + " " + person.age);
//   console.log(person.career.toUpperCase());
// });

// const ages = family.map(function (item) {
//   return item.age + " " + item.career.toUpperCase();
// });
// const newFamily = family.map(function (item){
//   return {
//     firstName:item.names.toLocaleUpperCase(),
//     oldAge:item.age + 5,
//   }
// });
// // console.log(ages);
// const nameS = family.map(function (item){
// return `<h1>${item.names}</h1>`;
// });
// document.body.innerHTML = nameS.join(" ");
// console.log(nameS);

//With filter we get back an array when called
const youngFamily = family.filter(function (siblings) {
  return siblings.age <= 22;
});

const medicalDoctors = family.filter(function (siblings) {
  return siblings.career === "Medical Doctor";
});

const coder = family.filter(function (siblings) {
  return siblings.career === "Lab tech & Coder";
});

console.log(youngFamily);
console.log(medicalDoctors);
console.log(coder);

//find
const besties = ["Sibo", "Liliane", "Roger"];
const sibling = family.find(function (sibling) {
  return sibling.id === 3;
});

console.log(sibling);
console.log(
  besties.find(function (bestie) {
    return bestie === "Sibo";
  })
);

//Reduce function
const people = [
  { name: "Annexode", age: 25, position: "Leaner", id: 1, salary: 10000 },
  { name: "Yves", age: 25, position: "Tutor", id: 1, salary: 2000 },
  { name: "Benimana", age: 26, position: "Leaner", id: 1, salary: 40000 },
  { name: "Elie", age: 23, position: "Leaner", id: 1, salary: 50000 },
];

const monthlyExpenses = people.reduce(function (acc, currItem) {
  console.log(`Total: ${acc}`);
  console.log(`Current Expense: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(monthlyExpenses);

//Standard built in Object
const check = Math.floor(Math.sqrt(24.4));
console.log(check);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

const dates = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const hours = [
  "0PM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
  "12PM",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const date = new Date();
console.log(date);

const umunsi = date.getDay() - 1;
console.log(days[umunsi]);

const ukwezi = date.getMonth();
console.log(months[ukwezi]);

const itariki = date.getDate() - 1;
console.log(dates[itariki]);

const isaha = date.getHours();
console.log(hours[isaha]);

const umwaka = date.getFullYear();
console.log(umwaka);

const amatariki = `${days[umunsi]}, ${dates[itariki]} ${
  months[ukwezi]
} ${date.getFullYear()},  ${hours[isaha]}`;
console.log(amatariki);

// document.body.innerHTML = amatariki



//DOM. Document Object Model

document.querySelector("label").style.display = "none";

document.querySelector("h1").style.backgroundColor = "green";

const title = document.getElementById("title");
const elementType = title.nodeName;
const css = title.style;

console.log(elementType);
console.log(elementType);
console.log(css);

const list = document.getElementsByTagName("li");
const extendedList = [...list];

console.log(extendedList);
list[3].style.color = "green";
list[3].style.fontSize = "40px";
extendedList.forEach(function (item) {
  item.style.backgroundColor = "yellow";
  console.log(item);
});

const lastList = document.querySelector(".last");
lastList.style.backgroundColor = "red";

console.log(list);

const attributions = document.querySelector("#attributions");
const attributes = attributions.children;
const extendedAttributes = [...attributes];

extendedAttributes.forEach(function (attribute) {
  attribute.style.fontSize = "100px";
  console.log(attribute);
});
const allAtrributes = attributions.childNodes;

console.log(extendedAttributes);

// console.log(attributes);
// console.log(allAtrributes);

const heading = document.querySelector("h4");
console.log(heading);

const paragraph = document.querySelector("p");
const parent = paragraph.parentElement;
parent.style.backgroundColor = "blue";


//NextSibling and previousSibling
const first = document.querySelector(".first");
const second = first.nextSibling.nextSibling.style.color = "white";


console.log(first);
console.log(second);

const last = document.querySelector("#last");
const beforelast = last.previousSibling.previousSibling;



console.log(beforelast);
console.log(last);

const special =document.getElementById("special");
const content = special.lastChild.nodeValue;

console.log(content);


//gettAttributes();
//setAttribute();
