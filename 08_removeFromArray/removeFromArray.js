const removeFromArray = function(array, ...value) {
    for (i=0; i < value.length; i++) {
        array.splice(value[i])
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
