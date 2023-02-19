//without type alias
var studentInfo = function (studentId, firstName, lastName, middleName, isEnrolled) {
    var enrolled = isEnrolled ? 'is' : 'is not';
    return '$The student ${firstName} ${middleName} ${lastName} with an id of ${studentId} ${enrolled} enrolled';
};
// with type alias
var studentInfo2 = function (info, school) {
    if (school === void 0) { school = "East high School"; }
    var enrolled = info.isEnrolled ? 'is' : 'is not';
    return "The student ".concat(info.firstName, " ").concat(info.middleName, " ").concat(info.lastName, " with an id of ").concat(info.studentId, " ").concat(enrolled, " enrolled in ").concat(school);
};
console.log(studentInfo2({ studentId: 1, firstName: 'John', lastName: 'Doe', middleName: 'M', isEnrolled: true }));
// console.log(studentInfo({studentId: 1, firstName: 'John', lastName: 'Doe', middleName: 'M', isEnrolled: true})
