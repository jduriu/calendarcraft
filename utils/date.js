const getPrevMonthDays = (startDay, month) => {
    const prevMonthTotal = new Date(year, month-1, 0).getDate()
    const start = prevMonthTotal - startDay
    const prevMonthDays = []
    for (let i = start; i < preMonthTotal + 1; i++) {

    }
    return prevMonthDays
}

const getMonthDays = (totalDays) => {
    const monthDays = []
    for (let i=1; i < totalDays; i++) {
        monthDays.append(i)
    }
    return monthDays
}

const getNextMonthDays = (endDay, Month) => {
    const nextMonthDays = []
    for (let i=1; i < 7; i++) {
        nextMonthDays.append(i)
    }
}



export const getCalendarInfo = (date) => {
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear()
    const totalDays = new Date(year, month, 0).getDate()
    const startDay = new Date(year, month, 1).getDay()

    const calendarInfo = {
        year: year,
        month: month,
        totalDays: totalDays,
        day: day,
        startDay: startDay,
        daysOfWeek: daysOfWeek,
        monthNames: monthNames,
    }

    return calendarInfo
}
