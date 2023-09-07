const testLet = () => {
    let num = 100;
    {
    let num = 200;
    }
    return num;
}
document.getElementById("testLet").innerHTML = testLet();

const testVar = () => {
    var num = 100;
    {
    var num = 200;
    }
    return num ;
}
document.getElementById("testVar").innerHTML = testVar();

try {
    const PI = 3.141592653589793;
    PI = 3.14;
    document.getElementById("testConst").innerHTML = PI;
} catch (err) {
        document.getElementById("testConst").innerHTML = err;
}

function calculateBill (meal, taxRate = 0.05) {
    const total = meal * (1 + taxRate);
    return total;
}

const myTotal = calculateBill(100, 0.13);
document.getElementById("taxBill").innerHTML = myTotal;

//es5
var car = {
    name: "Honda",
    products: ["jazz", "civic", "hrv"],
    showProduct: function () {
        this.products.map(
            function (product) {
                console.log(`${this.name} has launched ${product}`);
            }.bind(this)
        );
    },
};

car.showProduct();

// //es6
// var car = {
//     name: "Honda",
//     products: ["jazz", "civic", "hrv"],
//     showProduct1: function () {
//         this.products.map(() => {
//             console.log(`${this.name} has launched ${product}`);
//         });
//     },
// };

// car.showProduct();

const formatMessage = (name = "meme",id = 5,avatar) => {
    return {
        namaPanjang: name,
        id,
        avatar
        };
    };

const newMessage = formatMessage(
    "Belajar Programming",
    1,
    "https://i.pravatar.cc/300"
    );
    
console.log("newMessage", newMessage);

const {avatar, namaPanjang, id} = newMessage;

console.log("namaPanjang", namaPanjang, newMessage);
console.log("id", id);
console.log("avatar", avatar);

const newMessage2 = formatMessage ();
console.log("newMessage2", newMessage2);

const arr1 = ["a", "b"];
const arr2 = ["2"];

const allArr = [...arr1, ...arr2];
console.log("allArr", allArr);

const pekerjaan = {job: "programmer"};
const data = {...newMessage, ...pekerjaan};
console.log("data", data);

import {info, info2} from "./person.js";
// import person from "./person.js";
// const {name} = person();
// console.log("person", person);
console.log("info, info2", info, info2);