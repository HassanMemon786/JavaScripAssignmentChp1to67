// Task No 1
function greet() {
  console.log(new Date());
}
greet();

// Task No 2
function greet() {
  var a = prompt("Enter first name");
  var b = prompt("Enter last name");
  document.write(a, " " + b);
}
greet();

// Task No 3
function add() {
  var a = +prompt("Enter first num");
  var b = +prompt("Enter second num");
  var c = a + b;
  document.write("After Addition: " + c);
}
add();

// Task No 4
var firstValue = prompt("Enter First Value");
var secondValue = prompt("Enter Second Value");
var operator = prompt("Enter Operator");
function calculator(firstValue, secondValue, operator) {
  if (operator == "+") {
    return firstValue + secondValue;
  } else if (operator == "-") {
    return firstValue - secondValue;
  } else if (operator == "*") {
    return firstValue * secondValue;
  } else if (operator == "/") {
    return firstValue / secondValue;
  }
}

document.write(calculator(firstValue, secondValue, operator));

// Task No 5
function square(num) {
  var i;
  for (i = 0; i <= num; i++) {
    var sum = 0;
    var i = i * i;
    sum = i;
  }
  document.write("The sum of squares for numbers: " + num + "is " + sum);
}
var num = parseInt(prompt("Enter a number:"));
square(num);

// Task No 6
function factorial(a) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = a; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
let n = 10;
answer = factorial(n);
document.write("The factorial of " + n + " is " + answer);

// Task No 7
function num() {
  var a = 1;
  for (a = 0; a <= 10; a++) {
    document.write(" " + a);
  }
}
num();

// Task No 8
function hypo() {
  console.log(Math.hypot(3, 4));
  console.log(Math.hypot(1));
  console.log(Math.hypot(2, 3));
  console.log(Math.hypot(8, 1, -5));
  console.log(Math.sqrt(81));
}
hypo();

// Task No 9
function rectangle(length, width) {
  var length = prompt("Enter length of rectangle");
  var width = prompt("Enter width of rectangle");
  var formula = length * width;
  console.log(formula);
}
rectangle();

function rectangle(a, b) {
  var a = 5;
  var b = 6;
  var formula = a * b;
  console.log(formula);
}
rectangle();

// Task No 10
function palindrome() {
  var a = prompt("Enter palindrome word");
  var b = "civic";
  if (a === b) {
    alert("It is right");
  } else {
    alert("it is not palindrome word");
  }
}
palindrome();

// Task No 11
function uppercase(str) {
  var a = str.split(" ");
  var b = [];

  for (var x = 0; x < a.length; x++) {
    b.push(a[x].charAt(0).toUpperCase() + a[x].slice(1));
  }
  return b.join(" ");
}
console.log(uppercase("the quick brown fox"));

// Task No 12
function word(str) {
  var a = "Web Development Tutorial";
  var b = a.replace("Web Development Tutorial", "Development");
  document.write("EXAMPLE STRING: " + a, "<br>EXPECTED OUTPUT: " + b);
}
word();

// Task No 13
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}
console.log(char_count("JSResourceS.com", "o"));

// Task No 14
//Calculate Circumference

function circumference() {
  var radius = prompt("Enter the radius of the circle");
  var circle = 2 * Math.PI * radius;
  alert("The circumference is " + circle + ".");
}
circumference();

//Calculate Area

function area() {
  var radius = prompt("Enter the radius of the circle");
  var circle = Math.PI * radius * radius;
  alert("The area is " + circle + ".");
}
area();
