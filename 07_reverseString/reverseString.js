const reverseString = function(str) {
    return str.split("")
    .reverse()
    .join("")

};


const reversedString = str => str.split("").reverse().join("")


console.log(reversedString("H ello World"))
// Do not edit below this line
module.exports = reverseString;
