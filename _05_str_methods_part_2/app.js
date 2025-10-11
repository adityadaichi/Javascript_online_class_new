

// Recap 


/*  string methods 
  1. length 
  2. startsWith()
  3. endsWith()
  4. trim()
  5. trimStart();
  6. trimEnd();
  7. indexOf('CHAR')
  8. lastIndexOf()
  9. repeat(number); 
  10. includes() -> true/ false

*/

// 
// 11. slice() -> startIndex,endIndex ,  5 , endIndex is excluded
// string index -> start with -> 0

let userName = "Ashutosh";
const subName = userName.slice(-4, 0) // lastIndex is  output : ash

// (startIndex> endIndex ) : in this case : slice() - > return null

console.log(subName); // Ash



// 12 . subString(), startIndex , endIndex 
let city = "patna";
const subCity = city.substring(4, 2);

// startIndex > endIndex :  phle index swap ho  jayega then result milega 

// endIndex -> excluded : 
console.log(subCity);


//  13  spit() methods 
// string -> "ashu"   -> array ['a','s','h','u'];
let myName = "ashu";
const myNameArray = myName.split(""); // array -> non primitive -> mutable - > reference data type 

console.log(myNameArray);


// 14 toLowerCase()
console.log(myName.toLowerCase());

// 15. toUpperCase()
console.log(myName.toUpperCase());

// properties and methods ? difference hai 
// 