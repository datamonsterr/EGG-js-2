// Symbol exercises
// 1
let sym1 = Symbol("foo")
let sym2 = Symbol("foo")
console.log(sym1 === sym2) // false

// 2
let obj = {
    1: "abc",
    2: "def",
    [sym1]: "bar"
}
console.log(obj[sym1]) // bar
obj[Symbol("foo")] = "baz"
console.log(obj[sym1]) // bar
obj[sym1] = "baz"
console.log(obj[sym1]) // baz

// 3: Symbol có phải là một kiểu dữ liệu nguyên thủy không? - Có

// 4: Symbol khong the so sanh voi bat ky gia tri nao khac ngoai chinh no
for (let [k, v] of Object.entries(obj)) {
    console.log(k, v)
} // 1 abc 2 def
