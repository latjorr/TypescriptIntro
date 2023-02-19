"use strict";
exports.__esModule = true;
var grade = '85';
var grade2 = 85;
var testTotal = 100;
var calcPercentage = function (studentGrade, testTotal) {
    var percentage = studentGrade / testTotal;
    return "This student got ".concat(percentage, " percent on the test");
};
console.log(calcPercentage(grade2, testTotal));
