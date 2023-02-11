const reverseString = function(str) {

    let splitString = str.split("");    //splits string into array of characters

    let reversedArray = splitString.reverse(); // reverses the characters in the array

    let joinedArray = reversedArray.join("");

    return joinedArray;

};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');

// Do not edit below this line
module.exports = reverseString;
