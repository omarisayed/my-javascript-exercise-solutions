const sumAll = function(n1, n2) {

    if (typeof n1 != Number || typeof n2 != Number){
        return 'ERROR'; 
    }
    
    if ((n1<0) || (n2 < 0)){
        return 'ERROR';
    } 

    if (n2 > n1){

        result = ((n2 - n1) + 1)/2 * (n1 + n2);

    }else if (n1 > n2){
        result = ((n1 - n2) + 1)/2 * (n2 + n1);
    }

    return result;

};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
