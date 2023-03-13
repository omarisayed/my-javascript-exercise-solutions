const findTheOldest = function(objArray) {
    return objArray.reduce(function(acc, curr){
        const maxAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

        if (maxAge < currentAge){
            return curr;   // curr : currentAge where curr is the person
        }
        return acc; // acc : maxAge where acc is the person
      })
};




function getAge(birth,death){
    if (!death){
        today = new Date().getFullYear();
        death = today;
    }else{
        return death - birth;
    }
}


// Do not edit below this line
module.exports = findTheOldest;



//------------------------------------------------------------------------------------------------------------------------------------------

// if the person is still living, get todays date and assign it to death. because we will count until today which is the last day anyways.
// This is same as having a max variable that holds the maximum value and updating it when the current value is larger than maximum value.
// We use reduce() because sort() would arrange the whole array in ascending and descending order and return the whole array. But the code should return one output i.e., the oldest person.