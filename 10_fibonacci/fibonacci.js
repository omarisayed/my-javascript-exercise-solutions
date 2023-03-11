const fibonacci = function(nth) {
    if (nth < 0){
        throw new Error("OOPS");
    }

    if (nth === 1 || nth === 2){    // 1st and 2nd terms return 1, 1 then it goes on from there. So, nothing returns 0 in this fibonacci code.
        return 1;
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2); // recursively call fibonacci function. This is the formula for Fibonacci sequence.

};

// Do not edit below this line
module.exports = fibonacci;






// THIS ONE STARTS FROM 1 i.e.  1,1,2,3,5,8,13,21,34,55,89