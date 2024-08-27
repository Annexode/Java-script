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
numberA++, number--;
numberA *= 2;

console.log(number);

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

// 6. Symbol
