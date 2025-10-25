const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else if (year % 4 === 0 && year % 100 != 0) {
        return true;
    }
    else {return false}
};

const input = 2004
console.log(leapYears(input));

// Do not edit below this line
module.exports = leapYears;
