// Task No 1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = "Hello " + firstName + " " + lastName;
document.write(fullName);

// Task No 2
var phone = prompt("Enter your mobile phone model: ");
var len = phone.length;
document.write(
  "My Favourite Phone is: " + phone + " Length of string is: " + len
);

// Task No 3
var string = "Pakistani";
document.write("Index of n: " + string.indexOf("n"));

// Task No 4
var string = "Hello World";
document.write("Last Index of l: " + string.lastIndexOf("l"));

// Task No 5
var word = "Pakistani";
document.write("Character at Index 3: " + word[3]);

// Task No 6
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = "Hello " + firstName.concat(lastName);
document.write(fullName);

// Task No 7
var a = "<br>City: ";
var b = "Hyderabad";
var c = b.replace("Hyderabad", "Islamabad");
document.write(a, b, "<br>After replacement: " + c);

//Task No 8
var message =
  "Ali and sami are best friends.They play cricket and football together. ";
var a = message.replace("and", "&");
document.write(message, "<br>", a);

//Task No 9
var a = "<br>Value: ";
var b = "Four Seventy two ";
var c = b.replace("Four Seventy two", "<br>Number: 472");
document.write(a, b, c);

//Task No 10
var a = prompt("Enter the string");
var b = a.toUpperCase();
document.write(b);

//Task No 11
function toTitleCase(str) {
  return str.replace(
    /\S+/g,
    (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
  );
}

document.write(toTitleCase("javascript"));

//Task No 12
var a = "35.36";
var b = a.replace("35.36", "3536");
document.write("Number: <br>" + a, "<br>Result: " + b);

//Task No 13
var username = prompt("Enter Username");
var specialChars = "*|,\":<>[]{}`';()@&$#%";
for (var i = 0; i < username.value.length; i++) {
  if (specialChars.indexOf(username.value.charAt(i)) != -1) {
    alert("Enter a valid Username");
    username.focus();
  }
}

//Task No 14
var a = ["applepie", "cake", "cookie", "chips", "patties"];
var b = prompt("welcome to delizia bakers.What do you want? ");
var c = a.indexOf("2");
if ((d = "paistry")) {
  alert("Sorry it is not available in our bakery");
  document.write("It is <b>available</b> on index 2 in our bakery: ", b, c);
}

//Task No 15
var a = prompt("Enter your password");
var b = ["pakistan", "alpha", "bajwa"];
var c = [21, 23, 46, 45, 56, 67, 78];
if (a == b) {
  alert("it must contain number ");
} else if (a === "c") {
  alert("enter alphabets");
} else {
  alert("enter a valid password");
}

//Task No 16

var uni = "University of Karachi";
var b = uni.split();
document.write(uni[0]);
document.write("<br>" + uni[1]);
document.write("<br>" + uni[2]);
document.write("<br>" + uni[3]);
document.write("<br>" + uni[4]);
document.write("<br>" + uni[5]);
document.write("<br>" + uni[6]);
document.write("<br>" + uni[7]);
document.write("<br>" + uni[8]);
document.write("<br>" + uni[9]);
document.write("<br>" + uni[10]); //university

document.write("<br>" + uni[11]);
document.write("<br>" + uni[12]); //of

document.write("<br>" + uni[13]);
document.write("<br>" + uni[14]);
document.write("<br>" + uni[15]);
document.write("<br>" + uni[16]);
document.write("<br>" + uni[17]);
document.write("<br>" + uni[18]);
document.write("<br>" + uni[19]);
document.write("<br>" + uni[20]); //karachi

//Task No 17
var a = "Pakistan";
var last = "Last charater of input: ";
var b = a.charAt("7");
document.write(a, "<br>" + last, b);

//Task No 18
var a = "The quick brown fox jumps over the lazy dog";
var count = (a.match(/the/g) || []).length;
document.write(a, "<br>There are 2 occurance of the word 'the': " + count);
