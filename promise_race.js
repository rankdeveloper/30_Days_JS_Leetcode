const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'promise1');
  });
  
  // console.log(promise1.then(value))
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'promise2');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // Expected output: "two"
  