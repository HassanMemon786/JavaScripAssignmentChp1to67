// Task No 1
function power(a, b) {
    x = 0;
    var res = 1;
    while (x < b) {
        res = res * a;
        x++;
    }
    document.write("The result of: " + res);
}
power(3, 4);

// Task No 2
var checkYear = prompt("Enter Year");
function checkLeapYear(checkYear) {
    if ((checkYear == 2012) || (checkYear == 2016) || (checkYear == 2020)) {
        document.write(checkYear + " is Leap Year");
    }
    else {
        document.write(checkYear + " is Not Leap Year");
    }
}
checkLeapYear(checkYear);

// Task No 3
var a = +prompt("Enter the value of a");
var b = +prompt("Enter the value of b");
var c = +prompt("Enter the value of c");

function calculateSides() {
    var S = (a + b + c) / 2;
    return S;
}
function calculateAreaOfTriangle() {
    var S = calculateSides();
    var areaofTriangle = S * ((S - a) * (S - b) * (S - c))
    document.writeln("The Area of Triangle is : " + areaofTriangle);
}

calculateAreaOfTriangle();

// Task No 4
var subject1 = +prompt("Enter marks of subject 01 :");
var subject2 = +prompt("Enter marks of subject 02 :");
var subject3 = +prompt("Enter marks of subject 03 :");

function calculateAverage() {
    var average = (subject1 + subject2 + subject3) / 3;
    return average;
}

function calculatePercentage() {
    var MarksObtained = (subject1 + subject2 + subject3);
    var percentage = (MarksObtained / 300) * 100;
    return percentage;
}

function mainFunction() {
    var average = calculateAverage();
    document.write("Average Marks is : " + average);
    document.write("<br />")
    var percentage = calculatePercentage();
    document.write("Percentage is: " + percentage + "%");
}

mainFunction();

// Task No 6
function removeVowel(str) {             
    var newString = " ";                            
    for (var i = 0; i < str.length; i++)  
    {           
      if (str[i].toLowerCase() != "a" && str[i].toLowerCase() != "e" && str[i].toLowerCase() != "i" && str[i].toLowerCase() != "o" && str[i].toLowerCase() != "u")                                   
       {           
       newString += str[i];         
      };   
    };   
    return newString;   
  };  
document.write(removeVowel("Pakistan is our country"));

// Task No 7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let Vowels = false;

    for (const words of str.toLowerCase()) {
        switch (words) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (Vowels) {
                        count++;
                        Vowels = false;
                    } else {
                        Vowels = true;
                    }
                    break;
                }
            default:
                Vowels = false
        }
    }
    return count;
}
document.write("The number of occurrences of any two vowels is :" + findOccurrences())

// Task No 8
var calculatedistance = +prompt("Enter the distance: ");
function convertToMeter() {
    return calculatedistance * 1000;
}

function convertToFeet() {
    return calculatedistance * 3280.84;
}

function convertToInches() {
    return calculatedistance * 39370.1;
}
function convertToCentimeter() {
    return calculatedistance * 100000;
}

document.writeln("<br/>The Distance in Meters is : " + convertToMeter())
document.writeln("<br/>The Distance in Feets is : " + convertToFeet())
document.writeln("<br/>The Distance in Inches is : " + convertToInches())
document.writeln("<br/>The Distance in Centimeters is : " + convertToCentimeter())

// Task No 9
var salary = +prompt("Enter The Salary :");
var hours = +prompt("Enter The Hours :");
var overTime;
var totalSalary;

if (hours > 40) {
    overTime = hours * 12;
}
else {
    overTime = hours;
}
totalSalary = overTime + salary;
document.write("Total Salary is : " + totalSalary)



// Question No 10
var withdrawAmount = +prompt("Enter the amount to widhdrawal :");

document.writeln("<br />Required notes of Rs. 100 is: " + Math.floor(withdrawAmount / 100));
document.writeln("<br />Required notes of Rs. 50 is: " + Math.floor((withdrawAmount % 100) / 50));
document.writeln("<br />Required notes of Rs. 10 is: " + Math.floor(((withdrawAmount % 100) % 50) / 10));


