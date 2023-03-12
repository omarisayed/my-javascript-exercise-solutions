const findTheOldest = function(objArray) {
    return objArray.reduce((acc, curr) => {
        const oldestAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        return oldestAge < currentAge ? curr : acc;
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