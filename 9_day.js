//2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.
 
// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
var argumentsLength = function(...args) {

    let len =0; 
    for(let i=0; i<args.length; i++){
      len++;
    }
     return len;
    };
    
    
    
   
     console.log(argumentsLength(1, 2, 3 , [] , {})); // 3
     