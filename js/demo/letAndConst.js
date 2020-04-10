/**
 * 类型检查
 * @type {bigint}
 */

let a = 345345345234561234567n
console.log(typeof a)

let b = null
console.log(typeof b) // object

let name = "luo";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?
