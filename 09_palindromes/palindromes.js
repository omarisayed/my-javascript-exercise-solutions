const palindromes = function (str) {
    str = str.replace(/[^A-Za-z0-9]/g, '');   //  removes all non-alphanumeric characters from a string, including spaces.
    str = str.toLowerCase(); //convert whole string to lower case.
    
    str_2 = str.split('').reverse().join('');
    
    if (str === str_2){
        return true
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
//
//
//
// I first removed all non-alphanumeric characters
//Then I converted the whole string to lowercase e.g., --> 'Acaramanamaraca' --> becomes --> 'acaramanamaraca'
// Then,in another variabale, I split the string into single characters, reversed it, then joined it to form a string again.
// If the strings match in original and reversed format, then it is palindrome. Else, it is not.