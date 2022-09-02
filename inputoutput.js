document.querySelector("h1").innerHTML = "code chakratech"
console.log(document)

var h2 = document.querySelector("h2").innerHTML;
console.log(h2)

document.querySelector("h3").innerHTML = "kolhapur"

var h4 = document.querySelector("h4").innerHTML;
console.log(h4)

function setData() {
    document.querySelector(".demo").innerHTML = "hello"
}
// addtion of two numbers by two user
function add() {
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt(num1)+parseInt(num2)
    document.querySelector("#result").innerHTML = num3;
}

function sub() {
    var num1 = document.querySelector("#num1").value
    var num2 = document.querySelector("#num2").value
    var num3 = parseInt(num1)-parseInt(num2)
    document.querySelector("#result").innerHTML = num3;
}

// form data
  function data(){
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var address = document.querySelector("#address").value
    document.querySelector("#id1").innerHTML = name;
    document.querySelector("#id2").innerHTML = email;
    document.querySelector("#id3").innerHTML = address;
  }

  document.querySelector("img").src = "https://miro.medium.com/max/200/0*vFBQNlsJssP9zSVL";
  
//  insert form data into javascript
function add1(){
    var number1 = document.querySelector("#number1").value
    var number2 = document.querySelector("#number2").value
    var number = parseInt(number1)+parseInt(number2)
   document.querySelector(".value").innerHTML = number;
}
function sub1(){
    var number1 = document.querySelector("#number1").value
    var number2 = document.querySelector("#number2").value
    var number = parseInt(number1)-parseInt(number2)
   document.querySelector(".value").innerHTML = number;
}
function mul1(){
    var number1 = document.querySelector("#number1").value
    var number2 = document.querySelector("#number2").value
    var number = parseInt(number1)*parseInt(number2)
   document.querySelector(".value").innerHTML = number;
}
function div1(){
    var number1 = document.querySelector("#number1").value
    var number2 = document.querySelector("#number2").value
    var number = parseInt(number1)/parseInt(number2)
   document.querySelector(".value").innerHTML = number;
}