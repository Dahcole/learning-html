//This stores a variable
var phrase = "Learning JavaScript is important in Web Technology";
var number = 6788;
var decimalnumber = 45.89;
var isMale = true;
var flaws = null;
var description = undefined;
document.write( number );
document.write( isMale );
document.write( phrase );
document.write("Welcome to JavaScript");
alert("JavaScript is fun")
phrase = "Dacole is a Software Engineer "
document.write( phrase );
//This allows you use HTML in JavaScript
document.write("<h2 style='color:blue;'>JavaScript is the best</h2>");
document.write("Strings are fun");
document.write("<hr/>");
//sring Methods
document.write( phrase.length );
document.write( phrase.toUpperCase() );
document.write( phrase.charAt(0) );
document.write( phrase.toLowerCase() );
document.write( phrase.charAt(1) );
document.write( phrase.indexOf("e") );
document.write( phrase.substring(11, 20) );
document.write( phrase.substring(phrase,indexOf("S"), phrase.length) );
document.write( phrase + "We love him" );

//Math and Numbers
document.write( 3.76 );
document.write( 3 + 5 );
document.write( 8 - 4 );
document.write( 3 * 5 + 4 );
document.write( 25 / 5 );
document.write( 10 % 3 );
var number = 6;
document.write( number + 8 );

//Math Methods
document.write( Math.abs(7) );
document.write( Math.max(9, 3) );
document.write( Math.min(9, 3) );
document.write( Math.round(4.5) );
document.write( Math.pow(7, 3) );
document.write( Math.sqrt(36) );
document.write( Math.random(0, 1) );
document.write( math.round(Math.random() * 10) );
document.write("<hr/>");
Basic Calculator
var num1 = window.prompt("Enter 1st number");
var num2 = window.prompt("Enter 2nd number");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
document.write(num1 + num2);

//Getting input from user
var name = window.prompt("What is your name?");
var age = window.prompt("How old are you?");
document.write("Hey " + name + ", How are today? Do you like being " + age + " years old?");

//Arrays
var fruits = new Array("Apples", "Mangoes", "Pawpaw", "Cherry");
document.write( fruits );
var fruits = ["Apples", "56", "Pawpaw", "True"];
document.write( fruits );
document.write( fruits[1]);
document.write( fruits.length );
fruits[0] = "ORANGES"
document.write( fruits );

//Functions
function  sayHi(name, age){
  document.write("<h1> Hello " + name + "</h1>");
  document.write("<p> You are " + age + " years old<p>");

  alert("HEY");
}
sayHi("Dacole", 23);
sayHi("Frank", 24);
sayHi("Chuks", 25);
function addition(num1, num2){
   return num1 + num2
}
var addednumbers = addition(2, 5);
document.write( addition(4, 7));
document.write( addednumbers );*/

HTML Elements
var header = document.getElementById("header");
header.innerHTML = "JAVASCRIPT";
header.style.color = "blue";
header.style.backgroundColor = "red";
var link = document.getElementById("link");
link.href = "https://facebook.com";
link.style = "color:green";

//Event listeners
function whenClicked(){
  alert("Why did you click?");
}
function whenClicked(element){
  element.innerHTML = "You don't have control"
  element.style = "background-color : blue";
}
var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.style = "box-shadow: 2px 2px 2px grey";
  this.width = "250"
});
image.addEventListener("mouseout", function(){
  this.style = "";
  this.width = "180"
});

//Messaging App
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
  var newMessage = document.createElement("li");
  newMessage.innerHTML = textbox.value
  messages.appendChild(newMessage);
  textbox.value = "";
});

//If Stament
var isMale = false;
var isTall = false;

if(isMale && isTall){
  document.write("You are a tall male") ; }
else if(isMale && !isTall){
  document.write("You are a short male"); }
else if(!isMale && isTall){
  document.write("You are a not male but tall"); }
else{
  document.write("You are not male and not tall or both"); }
document.write("<br/>")
if(isMale || isTall){
  document.write("You are either a male or tall or both") ; }
else{
  document.write("You are neither male nor tall"); }
document.write("<hr/>")

//If statement with comparison
// operators (<, >, >=, <=, ==, !=)
function max(num1, num2, num3){
  if(num1 >= num2 && num1 >= num3){
    return num1; }
  else if(num2 >= num1 && num2 >= num3){
    return num2; }
    else{
    return num3; }
}
document.write(max(6, 7, 10));
document.write("<br/>")
if ("Dacole" == "Dacole"){
  document.write("True"); }
