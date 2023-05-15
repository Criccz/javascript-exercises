const removeFromArray = function(array, ...args) {
    return array.filter(numb => !args.includes(numb))
};

// Do not edit below this line
module.exports = removeFromArray;
