// Task No 1
function showMessage(){
    window.alert("Thank for purchasing a phone from us!");
}


// Task No 3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


// Task No 4
function changePic1() {
    document.getElementById("myImage").src = "car2.jpg";
}
function changePic2(){
    document.getElementById("myImage").src = "car1.jpg";
}


// Task No 5
let counter = 0;
let countVar = document.getElementById("counter");

function increment(){
    countVar.innerText = ++counter
}

function decrement(){
    countVar.innerText = --counter
}