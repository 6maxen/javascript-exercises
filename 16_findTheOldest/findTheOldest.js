const findTheOldest = function(people) {
    thisYear = 2025

    let oldest = null;
    let oldestAge = 0;
    people.forEach((item) => {
        let age = (item['yearOfDeath'] || 2025) - item['yearOfBirth']
        if (oldestAge < age) {
            oldest = item;
            oldestAge = age;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
