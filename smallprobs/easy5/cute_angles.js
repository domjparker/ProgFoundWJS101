/*
Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees, and returns a string representing that angle in 
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent 
degrees, a single quote (') to represent minutes, and a double quote (") 
to represent seconds. There are 60 minutes in a degree, and 60 seconds in a 
minute.
*/
// TODO Problem
/*
INPUT = floating point number
OUTPUT = string, representing degrees, minutes, and seconds of the angle, with correct symbols.
RULES :
  Explicit: 
  -floating point number represents an angle between 0 and 360 degrees.
  -60 minutes in a degree, and 60 seconds in a minute
  Implicit: 
  -how do I get minutes and seconds from an angle? for degrees, use the rounded down integer.
  -for minutes, multiply the remaining decimal by 60, then use the rounded down integer.
  -for seconds, multiply the remaining decimal by 60, then use the rounded down integer, or rounded to 2 digits
  -what happens when the argument is less than 0?
  -what happens when the argument is more than 360?
*/
// TODO Examples
/*
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/
// TODO Data Structures
// numbers.
// TODO Algorithm
/*
-function takes the floating point number
-clarify floating point number - use helper function that takes in floating point number.
-set degrees to equal the rounded down integer value of floating point number
-take the decimal, multiply it by 60, and set variable minutes, ignoring the decimal part
-take the remaining decimal, multiple it by 60 and set variable seconds to the first 2 digits
-return sum of degrees, minutes, and seconds, but with each converted to string, and with correct symbols added.

-clarify floating point number function takes in floating point number passed to it
-if between 0 - 360, return floating point number as integer, rounded down if decimal.
-if less than 0 (i.e. negative number),
-if greater than 360, return remainder of floating point number as integer, rounded down, divided by 360
*/
// TODO Code

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function clarifyFloatingPointNumber(floatingPointNum) {
  if (floatingPointNum > 360) {
    return floatingPointNum % 360;
  } else if (floatingPointNum < 0) {
    while (floatingPointNum < 0) {
      floatingPointNum += 360;
    }
    return floatingPointNum;
  } else return floatingPointNum;
}

function dms(floatingPointNum) {
  let clarifiedFPN = clarifyFloatingPointNumber(floatingPointNum);
  let degrees = Math.floor(clarifiedFPN);
  let minutesRaw = (clarifiedFPN - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minutesRaw);
  let seconds = Math.floor((minutesRaw - minutes) * SECONDS_PER_MINUTE);
  minutes.toString().length === 1 ? minutes = "0" + minutes.toString() : minutes.toString();
  seconds.toString().length === 1 ? seconds = "0" + seconds.toString() : seconds.toString();
  degrees = degrees.toString();
  return `${degrees}°${minutes}'${seconds}"`;
}
400
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(40.73);  // 40°43'47"
dms(400.73);  // 40°43'47"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"