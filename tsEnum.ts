enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}



function isItSummer(month: Month) {
    let isSummer: boolean
    let monthName: string = typeof month === 'number' ? Month[month] : month
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true
            break
        default:
            isSummer = false
    }
    return `Is it summer? ${isSummer} because it is ${monthName}`
}

console.log(isItSummer(10))