const getAge = function(birthYear, deathYear) {
    if(!deathYear) deathYear = new Date().getFullYear();
    return deathYear - birthYear;
};

const findTheOldest = function(input) {
    return input.reduce((currentOldest, nextPerson) => {
        let currentAge = getAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath);
        let nextAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
        return (currentAge < nextAge) ? nextPerson : currentOldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
