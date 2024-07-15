// 2667. Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".

// const createHelloWorld = () => () => "Hello World"

// const f = createHelloWorld();
// console.log(f()); // "Hello World"


function hello(){
    return function(){
        return 'hello wolrd'
    }
}

const f = hello()
console.log(f())