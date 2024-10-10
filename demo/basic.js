// Exercise array methods
// copyWithin
let arr = [1, 2, 3, 4]
arr.copyWithin(0, 1, 3)
console.log(arr) // 2 3 3 4

// entries
arr = [1, 2, 3, 4]
for (let entry of arr.entries()) {
    console.log(entry[0] + entry[1])
} // 1 3 5 7 

// reduce
console.log(arr.reduce((acc, val) => {
    return acc + (val % 2 ? 1 : 0)
})) // 2

// find + findIndex
console.log(arr.find((val) => {
    return val % 2 === 0
})) // 2
console.log(arr.findIndex((val) => {
    return val % 2 === 0
})) // 1

// String exercises
let str = "Hello everybody, let's learn JavaScript"
str = str.replace("everybody", "EGG").split(",").reverse().join(". ").toUpperCase() + "!"
console.log(str) //  let's learn JavaScript Hello EGG!


