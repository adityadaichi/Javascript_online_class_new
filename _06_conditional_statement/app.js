
//  conditional statement 

// if  -> executed only when condition is true
// else ->  block of code execute when if condition false  
// else if  

const travelOption = "";

if (travelOption == "car") {
  console.log(" i have to go  via car ")
}
else if (travelOption == "bike") {
  console.log("go via bike ")
} else {
  console.log("go via onside road ");
}










// switch case 

// 1. 
// 2<0  false -> if body :block of code not execute in this case
if (2 < 0) {
  console.log("if statement ....."); // 
}

// real application 
var isLogin = true;
if (isLogin) {
  console.log("redirect to dashboard page .../")
} else {
  console.log("redirect login page...")
}




// block
{

}











//1️⃣ Problem: Check if a person is eligible to vote
onst userAge = 18;
if (userAge >= 18) {
  console.log("you can vote ...")
}
else {
  console.log("You can't vote...")
}


//2️⃣ Problem: Check whether a number is even or odd

//3️⃣ Problem: Grade a student based on marks
const userInput = prompt("Enter your Total Marks in %");

const totalMarksObtain = Number(userInput);

console.log(typeof totalMarksObtain);

if (totalMarksObtain < 0) {
  alert("Please enter a valid number between 0 to 100")

} else if (totalMarksObtain >= 90) {
  console.log("Your Grade is A+")

} else if (totalMarksObtain >= 80) {
  console.log("Your Grade is A-")

} else if (totalMarksObtain >= 60) {
  console.log("Your grade is B")

} else {
  console.log("Your Grade is C")
};

