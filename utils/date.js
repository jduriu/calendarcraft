const getPrevMonthDays = (startDay, month, year) => {
    const prevMonthTotal = new Date(year, month, 0).getDate()
    const start = prevMonthTotal - startDay + 1
    const prevDays = []
    if (start !== 6) {
        for (let i = start; i < prevMonthTotal + 1; i++) {
            prevDays.push(i)
        }
    }
    return prevDays
}

const getMonthDays = (totalDays) => {
    const curDays = []
    for (let i=1; i <= totalDays; i++) {
        curDays.push(i)
    }
    return curDays
}

const getNextMonthDays = (month, year) => {
    const nextDays = []
    const startDay = new Date(year, month+1, 1).getDay()
    if (startDay > 0) {
        for (let i=1; i <= 7-startDay; i++) {
            nextDays.push(i)
        }
    }
    return nextDays
}


const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const getCalendarInfo = (date) => {
    const month = date.getMonth()
    const monthName = monthNames[month]
    const day = date.getDay()
    const year = date.getFullYear()
    const totalDays = new Date(year, month+1, 0).getDate()
    const startDay = new Date(year, month, 1).getDay()
    const prevMonthDays = getPrevMonthDays(startDay, month, year)
    const curMonthDays = getMonthDays(totalDays)
    const nextMonthDays = getNextMonthDays(month, year)

    const calendarInfo = {
        year: year,
        month: month,
        monthName: monthName,
        totalDays: totalDays,
        day: day,
        startDay: startDay,
        daysOfWeek: daysOfWeek,
        monthNames: monthNames,
        prevMonthDays: prevMonthDays,
        curMonthDays: curMonthDays,
        nextMonthDays: nextMonthDays
    }

    return calendarInfo
}
