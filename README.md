# JavaScript Learning Journey 📚

A comprehensive guide covering JavaScript fundamentals from basics to advanced concepts.

## 📋 Table of Contents

1. [Day 1 - JavaScript Introduction](#day-1---javascript-introduction)
2. [Variables in JavaScript](#variables-in-javascript)
3. [Data Types](#data-types)
4. [String Methods Part 1](#string-methods-part-1)
5. [String Methods Part 2](#string-methods-part-2)
6. [Conditional Statements](#conditional-statements)
7. [Switch Case](#switch-case)

---

## Day 1 - JavaScript Introduction

### What is JavaScript?
- **High-level programming language** - Easy to understand, human-readable
- **Low-level vs High-level**: Low-level languages are closer to machine code (0s and 1s), while high-level languages are closer to human language

### Why do we need JavaScript?
1. **User Interaction**: Handle clicks and perform actions with UI updates
2. **Dynamic Websites**: 
   - Static websites have fixed content
   - Dynamic websites update content over time via database and APIs
   - UI updates through API calls (fetch, GET HTTP methods)

### JavaScript History
- **Created by**: Brendan Eich in 1995 (within 10 days!)
- **ECMA**: European Computer Manufacturers Association
- **TC39**: Technical Committee 39 - Group of world-class developers

### JavaScript Engine
- **V8**: Chrome's JavaScript engine
- **Chakra**: Microsoft's engine (Chromium)
- **Nitro**: Safari's JavaScript engine
- **JIT Compilation**: Just-in-time compiler
- **Interpreted**: Code executes line by line

---

## Variables in JavaScript

### Types of Variables
1. **var** (ES5)
   - Can be redeclared ✅
   - Can be reassigned ✅
   - Function-scoped

2. **let** (ES6 - 2015)
   - Cannot be redeclared ❌
   - Can be reassigned ✅
   - Block-scoped

3. **const** (ES6 - 2015)
   - Cannot be redeclared ❌
   - Cannot be reassigned ❌
   - Block-scoped

### Variable Naming Rules
- Must begin with a letter, `_`, or `$`
- Cannot start with a number
- Case-sensitive (name ≠ Name)
- Cannot be a reserved word (var, let, function, etc.)

### Naming Conventions
- **camelCase**: `userName`, `totalMarks`
- **PascalCase**: `UserName`, `TotalMarks`

---

## Data Types

### Primitive Data Types (7 types) - Immutable
1. **String**: `"hello"`, `'world'`
2. **Number**: `123`, `45.67`
3. **Boolean**: `true`, `false`
4. **BigInt**: `123n`
5. **Null**: `null`
6. **Undefined**: `undefined`
7. **Symbol**: `Symbol(3.14)`

### Reference Data Types - Mutable
1. **Object**: `{}`
2. **Array**: `[]`
3. **Function**: `function() {}`

### Key Concepts
- **Immutable**: Cannot be changed after creation (primitive types)
- **Mutable**: Can be modified after creation (reference types)
- **Stack**: Stores primitive data types
- **Heap**: Stores reference data types

---

## String Methods Part 1

### Basic String Properties & Methods
1. **length**: Returns string length
   ```javascript
   console.log(str.length);
   ```

2. **startsWith()**: Checks if string starts with specific character
   ```javascript
   console.log(str.startsWith('h')); // true/false
   ```

3. **endsWith()**: Checks if string ends with specific character
   ```javascript
   console.log(str.endsWith('o')); // true/false
   ```

4. **trim()**: Removes extra spaces from front and back
   ```javascript
   const trimStr = str.trim();
   ```

5. **trimStart()**: Removes spaces from the beginning
6. **trimEnd()**: Removes spaces from the end

7. **indexOf()**: Returns first index of character
   ```javascript
   console.log(str.indexOf('l')); // 2
   ```

8. **lastIndexOf()**: Returns last index of character
   ```javascript
   console.log(str.lastIndexOf('o'));
   ```

---

## String Methods Part 2

### Advanced String Methods

9. **repeat()**: Repeats string specified number of times
10. **includes()**: Checks if string contains substring (returns true/false)

11. **slice()**: Extracts part of string
    ```javascript
    let userName = "Ashutosh";
    const subName = userName.slice(0, 4); // "Ashu"
    // Note: endIndex is excluded
    ```

12. **substring()**: Similar to slice but handles index swapping
    ```javascript
    let city = "patna";
    const subCity = city.substring(4, 2); // Indexes are swapped if start > end
    ```

13. **split()**: Converts string to array
    ```javascript
    let myName = "ashu";
    const myNameArray = myName.split(""); // ['a','s','h','u']
    ```

14. **toLowerCase()**: Converts to lowercase
15. **toUpperCase()**: Converts to uppercase

### Properties vs Methods
- **Properties**: Characteristics of an object (e.g., `.length`)
- **Methods**: Actions that can be performed on an object (e.g., `.toUpperCase()`)

---

## Conditional Statements

### Basic Structure
```javascript
if (condition) {
    // code executes when condition is true
} else if (anotherCondition) {
    // code executes when anotherCondition is true
} else {
    // code executes when all conditions are false
}
```

### Real-world Applications
1. **Login System**:
   ```javascript
   var isLogin = true;
   if (isLogin) {
       console.log("Redirect to dashboard page");
   } else {
       console.log("Redirect to login page");
   }
   ```

2. **Voting Eligibility**:
   ```javascript
   const userAge = 18;
   if (userAge >= 18) {
       console.log("You can vote");
   } else {
       console.log("You can't vote");
   }
   ```

3. **Grade Calculation**:
   ```javascript
   if (totalMarksObtain >= 90) {
       console.log("Your Grade is A+");
   } else if (totalMarksObtain >= 80) {
       console.log("Your Grade is A-");
   } else if (totalMarksObtain >= 60) {
       console.log("Your Grade is B");
   } else {
       console.log("Your Grade is C");
   }
   ```

### Key Concepts
- **Block**: Code enclosed in `{}`
- **Condition**: Expression that evaluates to true or false
- **Prompt**: `prompt()` gets user input (returns string)
- **Type Conversion**: `Number()` converts string to number

---

## Switch Case

### Syntax
```javascript
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // default code block
}
```

### Real-world Applications
1. **User Role Management**
2. **Calculator Operations**
3. **Payment Handling**
4. **API Response Handling** (based on status codes)
5. **Theme Selection**
6. **Traffic Light Simulation**
7. **HTTP Request Methods** (GET, POST, PUT, UPDATE, DELETE, PATCH)

### Key Points
- **break**: Prevents fall-through to next case
- **default**: Executes when no case matches
- **Expression**: Value being compared
- **Case**: Specific value to match against

---

## 🎯 Key Takeaways

### JavaScript Fundamentals
- JavaScript is a high-level, interpreted programming language
- Created by Brendan Eich in 1995
- Powers dynamic web interactions and UI updates

### Variable Management
- Use `const` by default, `let` when reassignment needed, avoid `var`
- Follow camelCase naming convention
- Understand scope differences between var, let, and const

### Data Types
- Know the difference between primitive (immutable) and reference (mutable) types
- Use `typeof` to check data types
- Understand stack vs heap memory allocation

### String Manipulation
- Master essential string methods for text processing
- Understand the difference between properties and methods
- Practice with real-world string manipulation scenarios

### Control Flow
- Use conditional statements for decision making
- Apply switch-case for multiple value comparisons
- Build interactive applications with user input handling



*Happy Coding! Keep practicing and building amazing things with JavaScript! 🎉*
