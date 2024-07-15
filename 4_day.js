// Write a function createCounter. It should accept an initial integer init.
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

var createCounter = function (init=0) {
    var num = init
    return {
        increment: () => ++num,
        decrement: () => --num,
        reset: () => num = init
    }
};

const arr=[]

const counter = createCounter(10)
arr.push(counter.increment());
arr.push(counter.increment());  // 6
arr.push(counter.decrement()); // 5
arr.push(counter.reset())
arr.push(counter.reset())

console.log(arr)



