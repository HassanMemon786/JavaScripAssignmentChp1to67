// Question No 1

// Task No 1
var mainContent = document.getElementById("main-content");

// Task No 2
document.write(mainContent.innerHTML);

// Task No 3
var elementRender = document.getElementsByClassName("render");
for (var i = 0; i < 5; i++) {
    document.write("<br/>"+ elementRender[i].innerHTML);
}

// Task No 4
var firstName= document.getElementById("first-name");
firstName.value="Hassan"

// Task No 5
var lastName= document.getElementById("last-name");
lastName.value="Memon"
var email= document.getElementById("email");
email.value="hassanlakhani3@gmail.com"



// Question No 2

// Task No 1
var formContent = document.getElementById("form-content");
document.write("<br/>Node Type of Form Content is: "+formContent.nodeType)

// Task No 2
var lastName2 = document.getElementById("lastName");
document.write("<br />Node Type of Last Name is: "+lastName2.nodeType)
document.write("<br />Node Type of Last Name Child Node is: "+lastName2.firstChild.nodeType)

// Task No 3
var lastNameUpdated = lastName2.firstChild.nodeValue = "Last Name:Mr Memon"
document.write("<br />Update value of Last Name Child Node is: "+lastNameUpdated)

// Task No 4
document.write("<br />First Child of Main Content is: "+mainContent.childNodes[1].firstChild.nodeValue)
document.write("<br />Last Child of Main Content is: "+mainContent.childNodes[9].firstChild.nodeValue)

// Task No 5
document.write("<br />Next Sibling of LastName is : "+lastName2.nextSibling.nextSibling.childNodes[0].nodeValue)
document.write("<br />Previous Sibling of LastName is : "+lastName2.previousSibling.previousSibling.childNodes[0].nodeValue)
console.log(email.parentNode.innerHTML)

// Task No 6
document.write("<br />Parent Node of Email is :"+email.parentNode.nodeName)
document.write("<br />Node Type of Email is :"+email.nodeType)