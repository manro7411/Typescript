"use strict";
console.log("Ratchanon Traitiprat");
function total(a, b) {
    return a + b;
}
total(100, 200);
const fname = "Ratchanon";
let age = 30;
age += 10;
let isWorking = false;
console.log(` Name = ${fname.toUpperCase()}`);
console.log(` Age = ${age}`);
// any and unknown  
let namee = "Ratchanon";
namee = 10;
namee = true;
function formatnumber(num) {
    return num.toFixed(2);
}
let amount = 50.12325;
formatnumber(amount);
let money = "50.12345";
money = 50.12345;
console.log(formatnumber(money));
let username;
username = "Ratchanon";
console.log(username.toUpperCase());
let amount1 = 50;
let result;
if (amount1 % 2 == 0) {
    result = "Odd number";
}
else {
    result = "Even number";
}
console.log(`result = ${result}`);
let result1;
result1 = (amount1 % 2 == 0) ? "even number" : "odd number";
let service = 1;
let totall;
switch (service) {
    case 1:
        totall = "สอบภามยอดเงืนคงเหลือในบัญชี";
        break;
    case 2:
        totall = "ฝากเงืน";
        break;
    case 3:
        totall = "ถอนเงิน";
        break;
    default:
        totall = "error";
        break;
}
console.log(`result = ${totall}`);
for (let count = 0; count <= 10; count++) {
    console.log(count);
}
let user = ["nine", "pooh", "kong", "Poom"];
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}
