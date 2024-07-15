// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array 
//with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {

    var len = arr.length;
    for (let i = 0; i < len; i++) {
        arr[i] = fn(arr[i], i)

    }

    return arr
};

function fn(a, b) {
    return a + b
}

const arr = [1, 2, 3, 4, 5]
console.log(map(arr, fn))


// using map function
console.log("Using map() -------------")
const arr1 = [1, 2, 3, 4, 5]

function sumArr1() {
    return arr1.map((a, i) => a + i)
}

console.log(sumArr1())