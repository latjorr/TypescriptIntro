// Objectives: create a type alias for a function type
// Topics: type alias, function type
type Student = {
    studentId: number
    firstName: string
    lastName: string
    middleName: string
    isEnrolled: boolean
}
//without type alias
let  studentInfo = (studentId: number, firstName:string, lastName:string, middleName:string, isEnrolled:boolean) : string => {
    let  enrolled = isEnrolled ? 'is' : 'is not'
    return '$The student ${firstName} ${middleName} ${lastName} with an id of ${studentId} ${enrolled} enrolled'
}

// with type alias
let studentInfo2 = (info: Student, school:string = "East high School") : string => {
    let enrolled = info.isEnrolled ? 'is' : 'is not'
    return `The student ${info.firstName} ${info.middleName} ${info.lastName} with an id of ${info.studentId} ${enrolled} enrolled in ${school}`
}

console.log(studentInfo2({studentId: 1, firstName: 'John', lastName: 'Doe', middleName: 'M', isEnrolled: true}))

// console.log(studentInfo({studentId: 1, firstName: 'John', lastName: 'Doe', middleName: 'M', isEnrolled: true})


