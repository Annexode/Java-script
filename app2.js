// const first = document.querySelector(".first");
// const idValue = first.getAttribute("id");
// console.log(idValue);

// const link = document.getElementById("link");
// const showLink = link.getAttribute("href");
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute("class", "first");
// last.textContent = "I also got a class of first";
// console.log(last);

// const links = document.querySelectorAll(".first");
// console.log(links);

// End of index one

// Start of index two

// const firstElement = document.getElementById("firstElement");
// const secondElement = document.getElementById("secondElement");
// const thirdElement = document.getElementById("thirdElement");

// console.log(classValue);

//const classValue = firstElement.getAttribute("class");
// secondElement.className = "colors text"

// thirdElement.classList.add("colors")
// const classValue = thirdElement.classList;

//createElement("element")
//createTextNode("text content")
//create.appendChild("childElement")

// const result = document.getElementById("result");
// const first = document.querySelector(".red");

//create empty element

// const bodyDiv = document.createElement("div");

//create text node

//insertBefore()
// const text = document.createTextNode("a simple body div");
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv,result)

// const heading = document.createElement("h2");
// const headingText = document.createTextNode("I am dynamic heading two");
// heading.appendChild(headingText);
// heading.classList.add("blue");

// result.insertBefore(heading, first);

// const smallHeading = document.createElement("h6");
// const smallHeadingText = document.createTextNode("I am small heading");

// smallHeading.classList.add("red");
// smallHeading.appendChild(smallHeadingText);
// document.body.replaceChild(smallHeading, bodyDiv);

// console.log(result.children);

//Prepend
//InnerText

// const heading = document.createElement("h2");
// heading.innerText = "I am the other dynamic heading";
// document.body.prepend(heading);

// const result = document.querySelector("#result");
// const heading = result.querySelector("h1");
// result.removeChild(heading);

//result.remove();

//innerHTML
//TextContent

// const list = document.getElementById("first");
// const div = document.getElementById("second");
// const item = document.querySelector(".item");

//CSS

// const random = document.querySelector(".random");
// random.classList.add("title");

//Select Element
//addEventListener()
//what event, what to do

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// function changeColor() {
//   let classCheck = heading.classList.contains("red");
//   if (classCheck) {
//     heading.classList.remove("red");
//   } else {
//     heading.classList.add("red");
//   }
// }

// btn.addEventListener("click", changeColor);

// const heading = document.querySelector("h2");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function(){
//     console.log("You clicked me");
// });
// btn.addEventListener("mousedown", function(){
//     console.log("down");
// });
// btn.addEventListener("mouseup", function(){
//     console.log("up");
// });

// heading.addEventListener("mouseenter", function(){
//     heading.classList.add("blue")
// });
// heading.addEventListener("mouseleave", function(){
//     heading.classList.remove("blue")
// });

// const nameInput = document.getElementById("name");
// nameInput.addEventListener("keypress", function(){
//     console.log("You pressed");
// });

// nameInput.addEventListener("keydown", function(){
//     console.log(nameInput.value);
// });

// nameInput.addEventListener("keyup", function () {
//   console.log(nameInput.value);
// });

// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");
// const link = document.querySelector("#link");
// const body = document.querySelector("body");

// heading.addEventListener("click", function (event) {
// heading.classList.add("blue");

//   console.log(event.currentTarget);
// });

// btn.addEventListener("click", function (event) {
//   btn.classList.add("red");
//   console.log(event.type);
// });

// body.addEventListener("click", function(event) {
//   body.classList.add("red");
//   console.log(event.currentTargettarget);
// });

// function someFunc(e){
//     e.preventDefault();
// }

//    link.addEventListener("click", someFunc);

//target and Current target//
////////////////////////////

// const btns = document.querySelectorAll(".btn");
// btns.forEach(function(btn){
//   btn.addEventListener("click", function(e){
//     // console.log(e.currentTarget);
//     // e.currentTarget.style.color = "green";
//     console.log(e.target);
//     e.target.style.color = "green";
//   })
// })

//allows select dynamic elements,
//event propagation
//and event bubbling//
////////////////////////////

// const container = document.querySelector(".container");
// const list = document.querySelector(".listItems");

// function showBubbling(e){
//   console.log(`Current target`, e.currentTarget);
//   console.log(`target`, e.target);
// }

// list.addEventListener("click", showBubbling);
// container.addEventListener("click", showBubbling);
// document.addEventListener("click", showBubbling);
// window.addEventListener("click", showBubbling);

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");

// function sayHello() {
//   console.log("Hello!");
// }

// btn.addEventListener("click", function () {
//   const element = document.createElement("h1");
//   element.classList.add("heading");
//   element.textContent = "I am inside the damn container";
//   container.appendChild(element);
//   console.log(element);
// });
// container.addEventListener("click", function(e){
//   if (event.target.classList.contains("heading")){
//     console.log("Hello there!");

//   }
// })
// heading.addEventListener('click', sayHello)

//submit event listener
//prevent default
//getting a value

const form = document.getElementById("form");
const client = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted successfully");
  console.log(client.value);
  console.log(password.value);
  
  
});
