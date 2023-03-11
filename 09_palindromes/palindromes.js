const palindromes = function (str) {
    str = str.replace(/\s+/g, ''); //first, remove all the spaces from the string.
    str = str.replace(/\,/g, ''); //remove all commas.
    str = str.toLowerCase(); //convert whole string to lower case.
    str = str.split(''); //then, split the string into an array.
    
    strArray = str;
    strReversed = str.reverse(strArray);
    
    if (strArray === strReversed){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// I first removed all the spaces from a string. e.g. 'race car' becomes 'racecar'
// Then I split it into single characters i.e. ['r','a','c','e','c','a','r']
// A palindrome needs to be same forwards and backwards. So, I check if the array is the samewith the original when it is reversed. If it is, return true, i.e. it is a palindrome.
