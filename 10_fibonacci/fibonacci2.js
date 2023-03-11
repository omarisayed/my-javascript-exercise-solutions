const fibonacci = function(nth) {
    if (nth < 0){
        throw new Error("OOPS");
    }
    if (nth === 1){ // 1st term is 0
        return 0;
    }else if (nth === 2 || nth === 3){    // 2nd and 3rd terms return 1, 1 then it goes on from there. So, nothing returns 0 in this fibonacci code.
        return 1;
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2); // recursively call fibonacci function. This is the formula for Fibonacci sequence.
};


console.log(fibonacci(10));




// THIS ONE STARTS FROM 0 i.e.  0,1,1,2,3,5,8,13,21,34,55,89