const nums = [1,2,3,4,5,];
const removeFromArray = function(arr, [target]) {
    i = arr.indexOf(target);
    removed = arr.splice(i, target.length());
};

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
