'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(str){
    let STR=str.slice(2)
    return STR
}
function cutLast(str){
    let STR=str.substring(0,str.length-2)
    return STR
}
function cutFirstLast(str){
    let STR=cutLast(cutFirst(str))
    return STR
}
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, "function")
assert.strictEqual(typeof cutLast, "function")
assert.strictEqual(typeof cutFirstLast, "function")
assert.strictEqual(cutFirst("Blan"), "an")
assert.strictEqual(cutLast("Blan"), "Bl")
assert.strictEqual(cutFirstLast("Blabla"), "ab")
// End of tests */
