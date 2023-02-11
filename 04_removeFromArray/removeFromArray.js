var arr = [];

const removeFromArray = function(arr, ...toRemove) {

    toRemove.forEach((n) =>{
        var index = arr.indexOf(n);
        if(index != -1){
            arr.splice(index,1);
        }
    })

    return arr;

};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;



