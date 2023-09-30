export default function CalendarGrid({calendarInfo, selected, setDate}) {

    const dayAbbreviations = calendarInfo.daysOfWeek
    const year = calendarInfo.year
    const month = calendarInfo.month
    const prevMonthDays = calendarInfo.prevMonthDays
    const curMonthDays = calendarInfo.curMonthDays
    const nextMonthDays = calendarInfo.nextMonthDays


    const changeDate = (month, day = 1) => {
        if (month > 11) {
            const newDate = new Date(year+1, 0, day)
            setDate(newDate)
        } else if (month < 0) {
            const newDate = new Date(year-1, 11, day)
            setDate(newDate)
        } else {
            const newDate = new Date(year, month, day)
            setDate(newDate)
        }
    }

    return (
        <div className="h-full">
            <div className="flex flex-wrap justify-between mb-6">
                {dayAbbreviations.map((abbreviation) => (
                    <div
                    className="flex justify-center w-[14.2%] text-2xl"
                    key={abbreviation}
                    >
                        {abbreviation}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-between">
                {prevMonthDays.map((day) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={day}
                    onClick={() => changeDate(month-1, day)}
                    >
                        <button
                        className=" transition ease-in-out duration-500 border border-gray-500 rounded-full w-[40px] h-[40px] text-gray-500 hover:bg-slate-200 hover:text-black hover:scale-125"
                        >
                            {day}
                        </button>
                    </div>
                ))}
                {curMonthDays.map((day) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={day}
                    >
                        <button
                        className={
                            `transition ease-in-out duration-500 border rounded-full w-[40px] h-[40px] text-white hover:bg-slate-200 hover:text-black hover:scale-125
                            ${
                                day === selected
                                ? 'bg-blue-600'
                                : ''
                            }
                            `
                        }
                        onClick={() => changeDate(month, day)}
                        >
                            {day}
                        </button>

                    </div>
                ))}
                {nextMonthDays.map((day) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={day}
                    >
                        <button
                        className="transition ease-in-out duration-500 border border-gray-500 rounded-full w-[40px] h-[40px] text-gray-500 hover:bg-slate-200 hover:text-black hover:scale-125"
                        onClick={() => changeMonth(month+1, day)}
                        >
                            {day}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}
