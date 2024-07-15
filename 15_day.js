
//2725. Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, 
// return a cancel function cancelFn. The function fn should be called with args immediately 
// and then called again every t milliseconds until cancelFn is called.
var cancellable = function (fn, args, t) {
    fn(...args)

    const timer = setInterval(() => fn(...args), t)
    const cancelFn = () => clearInterval(timer)

    return cancelFn
};


const result = []

const fn = (x) => x * 2
const args = [4], t = 20, cancelT = 110

const start = performance.now()

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start)
    result.push({ "time": diff, "returned": fn(...argsArr) })
}

const cancel = cancellable(log, args, t);

setTimeout(() => {
    cancel()
}, cancelT)

setTimeout(() => {
    console.log(result)  // [
    //      {"time":0,"returned":8},
    //      {"time":20,"returned":8},
    //      {"time":40,"returned":8},           
    //      {"time":60,"returned":8},
    //      {"time":80,"returned":8},
    //      {"time":100,"returned":8}
    //  ]
}, cancelT + t + 15)    
