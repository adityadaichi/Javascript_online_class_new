//  switch case in the javascript 
//  alternative hai if else 
// value :

// keywords 
// 1. switch 
// 2. case 
// 3. break
// 4. default 

/*
const expression = "";

switch (expression) {
  case value:
    console.log()
    break;
  case value:
    console.log()
    break;
  default:
    console.log()
}
*/

// const userName = "rahul";// variable ->  immutable , primitive , no dec , no reassign

// switch (userName) {
//   case "Ashutosh":
//     console.log("you are Ashutosh ");// logic code execute
//     break;
//   case "Aman":
//     console.log("you are aman");
//     break;
//   default:
//     console.log("❌user not found");
// }




//  project 
/*  
  1. user role based 
  2. calculator operation 
  3. payment handling 
  4. api response based on status code 
  5. theme selections 
  6. traffic  light simulation 
  7. http request methods handling , get , post , put , update , delete , patch 
*/

// 1. user role based 
// const role = "Admin"
// Admin , editor , viewer 
const role = prompt("Enter your role");
switch (role) {
  case "Admin":
    console.log("You have full access , you can perform crud operation! ");
    break;
  case "Editor":
    console.log("you can only add some data ! , you have access to delete data");
    break;
  case "Viewer":
    console.log("You can only read the data or view the data ");
    break;
  default:
    console.log("Unknown User !");
}

// 2. calculator operation 
// operator , + , - , * , /  
// let a = 10, and b ;  take input from user 
// console.log(result: a+b)