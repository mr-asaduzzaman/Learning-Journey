/**
 * IS LeapYear?
 * 1. If year is not divisible by 100 and divisible by 4 is a leapyear.
 * 2. If year is divisible by 400 is a leapyear.
 * 3. eles not a leapyear
 */


function IsLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true
    }
    else if (year % 400 === 0) {
        return true
    }
    else {
        return false
    }
}

const isleap = 2100;
const Answer = IsLeapYear(isleap);
console.log(Answer)