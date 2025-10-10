
console.log("variables in javascript")


// 1 var  // right side ka value ->left side me assign or reference 

// declare + initialize

// console.log(name);  // access phle kr rhe hai ? 
var name = "Ashutosh";  // declare
name = "Aman"; // reAssign ✅
console.log(name); // aman 
//
var name = "rahul"; // redeclare
console.log(name); // rahul


// 2. let 
// console.log(age);
let age = 21; // declare
age = 22;  // reAssign   ✅ 

// let age = 35; // try kr rhe hai redeclare 
// ❌ Cannot redeclare block-scoped variable

console.log(age);


// block-scoped


// 3.  const 

const userAddress = "kolkata"; //const <----- constant

// reAssign 
userAddress = "bihar";// reassing ❌Assignment to constant variable. 
const userAddress= "noida";
// ❌Cannot redeclare block-scoped variable 
console.log(userAddress); //

