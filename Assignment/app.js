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