console.log("Ratchanon Traitiprat")

function total(a: number, b: number) {
    return a + b;
}
total(100, 200)

const fname: string = "Ratchanon";
let age: number = 30;
age += 10;
let isWorking: boolean = false;

console.log(` Name = ${fname.toUpperCase()}`)
console.log(` Age = ${age}`)

// any and unknown  

let namee: any = "Ratchanon";
namee = 10;
namee = true

function formatnumber(num: number) {
    return num.toFixed(2);
}
let amount = 50.12325
formatnumber(amount)

let money: any = "50.12345"
money = 50.12345
console.log(formatnumber(money))

let username:unknown;
username="Ratchanon";

console.log((username as string).toUpperCase())

let amount1:number = 50;
let result:String;
if (amount1 % 2 == 0) {
    result="Odd number"
} else {
    result="Even number"
}
console.log(`result = ${result}`);


let result1:string;
result1 = (amount1%2 == 0) ? "even number":"odd number";

let service:number = 1;
let totall:string;

switch (service) {
    case 1: 
    totall = "สอบภามยอดเงืนคงเหลือในบัญชี"
        break;
    case 2:
    totall = "ฝากเงืน"
        break;
    case 3:
     totall = "ถอนเงิน"
        break;

    default:
        totall = "error"
        break;
}
console.log(`result = ${totall}`)

for (let count:number = 0; count <= 10; count++) {
    console.log(count)
}

let user:string[] = ["nine","pooh","kong","Poom"]
for (let i = 0; i < user.length; i++) {
    console.log(user[i])
    
}