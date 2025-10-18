// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators
// 6. ternary Operators





// 1. Arithmetic Operator
// + , _ , * , / , % (Modulus), ** (Exponencial- power), ++ (Incriment, pre and post if after and before), -- (decriment pre and post if after and before)
// const a = 5;
// var b = 6;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);
// console.log(b ** a);
// console.log(--b);
// console.log(++b);
// console.log(++b);

// 2. Assignment Operators
// = (Assign), += (Add then assign os "Arithmetic Assign") , -= () , *= (), /= (), **= (), ++= (), --= ()
// var x = 30;
// x += 20;
// x -= 10;
// x *= 5;
// x /= 100;
// x **= 2;
// console.log(x);

// // 3. Comparison Operators
// // ==, ===, < , > , <= , >= , != , !==
// console.log(5 == "5"); //only value
// console.log(5 === Number("5"));
// console.log(5 === "5"); //value and type
// console.log(5 > "6"); // - how inter nally working how checking value and type
// console.log(5 < "6"); // - how inter nally working how checking value and type
// console.log(5 <= "6"); // - how inter nally working how checking value and type
// console.log(5 >= "6"); // - how inter nally working how checking value and type
// console.log(6 != "6"); // - how inter nally working how checking value and type
// console.log(6 !== "6"); // - how inter nally working how checking value and type
// console.log(!false)

// 4. Logical Operators

const discountAmmount = parseInt((prompt("Enter Discount Code")).slice(4));
const menber = "No";
const cartTotal = 1000;
const cartCodeDiscount = (cartTotal * discountAmmount) / 100;
const cartAfterDiscount = cartTotal - cartCodeDiscount;
const cartMenberDisciunt = (cartAfterDiscount * 10) / 100;
const cartAfterMemberDiscount = cartAfterDiscount - cartMenberDisciunt;
if (cartTotal > 0) {
    if (menber === "Yes" && cartAfterMemberDiscount >= 500) {
        console.log("Original total" + " " + (cartTotal));
        console.log("Discount applied" + " " + (cartCodeDiscount));
        console.log("Membership discount:" + " " + (cartMenberDisciunt));
        console.log("Free delivery applied!");
        console.log("Final amount to pay " + (cartAfterMemberDiscount));
    } else if (menber === "Yes" && cartAfterMemberDiscount < 500) {
        console.log("Original total" + " " + (cartTotal));
        console.log("Discount applied" + " " + (cartCodeDiscount));
        console.log("Membership discount:" + " " + (cartMenberDisciunt));
        console.log("Total after discount " + (cartAfterMemberDiscount));
        console.log("RS: 50 for delivery Total after discount is bellow 500. buy more to get free shipping");
        console.log("Final amount to pay " + (cartAfterMemberDiscount + 50));
    } else if (menber === "No" && cartAfterDiscount >= 500) {
        console.log("Original total" + " " + (cartTotal));
        console.log("Discount applied" + " " + (cartCodeDiscount));
        console.log("Free delivery applied!");
        console.log("Final amount to pay " + (cartAfterDiscount));
    } else if (menber === "No" && cartAfterDiscount < 500) {
        console.log("Original total" + " " + (cartTotal));
        console.log("Discount applied" + " " + (cartCodeDiscount));
        console.log("Total after discount " + (cartAfterDiscount));
        console.log("RS: 50 for delivery Total after discount is bellow 500. buy more to get free shipping");
        console.log("Final amount to pay " + (cartAfterDiscount + 50));
    }
} else {
    console.log("Invalid cart amount")
}