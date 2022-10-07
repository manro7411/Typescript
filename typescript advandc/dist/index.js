"use strict";
function sayHi() {
    console.log("Hello Typescript");
}
function sayy(name) {
    console.log(`hello = ${name}`);
}
function getAddress() {
    return "Bangkok";
}
console.log(getAddress());
sayHi();
sayy("nine");
function checknumber(num) {
    if (num % 2 == 0) {
        return "even number";
    }
    else {
        return "odd number";
    }
}
checknumber(10);
function total(a, b) {
    return a + b;
}
console.log(total(2, 5));
const check = (num) => {
    if (num % 2 == 0) {
        return "even number";
    }
    else {
        return "odd number";
    }
};
//set defealt value
function showEmployee(name, age, address = "Bangkok") {
    console.log(` Name = ${name} , Age = ${age} , address = ${address}`);
}
showEmployee("Nine", 19);
showEmployee("Pooh", 19);
showEmployee("Nut", 19, "Rayong");
showEmployee("Tos", 20);
//create object 
const person = {
    name: "Ratchanon",
    age: 19,
    address: "bangkok"
};
const person2 = { name: "Nine", age: 25 };
const positon = { lat: 50, long: 20 };
// function -> object 
function showDetail(data) {
    console.log(` Name = ${data.name} , Age = ${data.age}`);
}
showDetail(person);
// function --> sent object 
// const name = () : object => { return object }
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());
let emp1 = { id: 1, name: "Nine", salary: 500000, phone: "06x-xxx-xxxx" };
let emp2 = { id: 2, name: "Note", salary: 30000, phone: "08x-xxx-xxxx" };
emp1.salary = 250000;
console.log(emp1);
// type Aliases (option properties --> ? )
let emp3 = { id: 3, name: "Nit", salary: 60000 };
// --> normal
const user1 = "Nine";
const user2 = "Joe";
// array    
const user0 = [];
user0.push("nine");
user0.push("Nit");
console.log(user0);
// array    
const user = ["Non", "Note"];
user.push("Nine");
user.push("Nit");
user.push("Nin");
console.log(user[0]);
for (let number = 0; number < user.length; number++) {
    console.log(` ลำดับที่  ${number + 1} = ${user[number]}`);
}
user.forEach(e => {
    console.log(e);
});
const profile = [];
profile.push({ name: "Nine", salary: 50000, department: "programmer" });
profile.push({ name: "Nine", salary: 50000 });
console.log(profile);
profile.forEach(e => {
    console.log(e);
});
for (let empp of profile) {
    console.log(empp);
}
function Hi(name) {
    if (!name) {
        return "Hello Typescript";
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("Error");
}
console.log(Hi());
console.log(Hi("Ratchanon Traitiprat"));
function result(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("Data Error");
}
console.log(result(100, 200));
console.log(result("100", "300"));
const section = ["บัญชี", "การเงิน"];
const department = ["Programmimg", "Marketing", "Graphic"];
department.push(...section);
console.log(department);
//Rest Parameter 
const totalresult = (...number) => {
    return number.reduce((result, value) => {
        return result + value;
        // 0 + 100
    }, 0);
};
console.log(totalresult(100, 200));
console.log(totalresult(100, 200, 300, 400, 500, 600, 700, 800));
//destructuring (การสลายโครงสร้าง)
//array
const colors = ["red", "green", "blue"];
const redd = colors[0];
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
const detail = {
    fname: "Nine",
    age: 19,
    address: "bangkok"
};
const { fname, age, address } = detail;
console.log(fname);
//tuple 
const point = [10, 20];
const goodStatus = [200, "OK"];
point[0] = 30;
console.log(point);
console.log(goodStatus);
//tuple lable
const re = [10, 20];
console.log(re);
const badStatus = [404, "not found"];
