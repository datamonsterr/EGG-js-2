// Strings
let string = "       Hello World           ";
console.log(string.length);
string = string.trim();
console.log(string.length);
let arr = string.split(" ");
console.log(arr);
console.log(arr.join(" a "));

String.prototype.addDat = function () {
    return this + " Dat";
}
let str = "Hello";
str = str.addDat();
console.log(str);

// Date time
now = new Date();
console.log(`Today is ${now}`);
birthday = new Date(2004, 9, 17);
console.log(`My birthday is ${birthday}`);
console.log(`My age is ${now.getFullYear() - birthday.getFullYear()}`);

// Iterables
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2)
let iter = arr2[Symbol.iterator]();
console.log(iter.next());

let myObj = {
    1: "a",
    2: "b",
    3: "c",
    toString: 1,
    [Symbol.iterator]: function () {
        let i = 1;
        return {
            next: () => {
                return {
                    value: `${i}: ${this[i]}`,
                    done: i++ > 3
                }
            }
        }
    }
}
console.log(myObj.hasOwnProperty('toString'))
// let iter = myObj[Symbol.iterator]();
for (let i of myObj) {
    console.log(i);
}


// Destructuring
let arr3 = [1, 2, 3, 4, 5, 6];
let [a, b, c, ...rest] = arr3;
console.log(a, b, c);
console.log(rest);
let obj = {
    name: "Dat",
    age: 17
}
let { name, age } = obj;
console.log(name, age);

function foo(...args) {
    let [a, b, c, ...rest] = args;
    console.log(`a, b, c = ${a}, ${b}, ${c}`);
    for (let i of rest) {
        console.log(`i = ${i}`);
    }
}
console.log(foo(1, 2, 3, 4, 5, 6, 7, 8, 9));

// // Ex: Turn object into HTML
// let myHTML = {
//     tag: "div",
//     children: [
//         {
//             tag: "div",
//             children: [
//                 {
//                     tag: "button",
//                     text: "click me"
//                 }
//             ],
//             text: "Hello World"
//         },
//         {
//             tag: "p",
//             text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         }
//     ]
// }

// const reveal = () => {
//     let htmlString = "";
//     htmlString += `<${myHTML.tag}>`;
//     myHTML.children.forEach((child) => {
//         htmlString += `<${child.tag}>`;
//         if (child.text) {
//             htmlString += child.text;
//         }
//         if (child.children) {
//             child.children.forEach((child) => {
//                 htmlString += `<${child.tag}>`;
//                 if (child.text) {
//                     htmlString += child.text;
//                 }
//                 htmlString += `</${child.tag}>`;
//             })
//         }
//         htmlString += `</${child.tag}>`;
//     })
//     htmlString += `</${myHTML.tag}>`;
//     document.body.innerHTML = htmlString;
// }
