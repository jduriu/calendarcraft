export default function CalendarGrid({calendarInfo, setSelected, selected, setDate}) {

    const dayNames = calendarInfo.daysOfWeek
    const year = calendarInfo.year
    const month = calendarInfo.month
    const prevMonthDays = calendarInfo.prevMonthDays
    const curMonthDays = calendarInfo.curMonthDays
    const nextMonthDays = calendarInfo.nextMonthDays


    const changeMonth = (month, day) => {
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
        <div className="p-10 h-full">
            <div className="flex flex-wrap justify-between mb-6">
                {dayNames.map((d) => (
                    <div
                    className="flex justify-center w-[14.2%] text-2xl"
                    key={d}
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-between">
                {prevMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={da}
                    onClick={() => changeMonth(month-1, da)}
                    >
                        <button
                        className="border rounded-full w-[40px] h-[40px] text-gray-500 hover:bg-slate-200 hover:text-black"
                        >
                            {da}
                        </button>
                    </div>
                ))}
                {curMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={da}
                    >
                        <button
                        className={
                            `border rounded-full w-[40px] h-[40px] text-white hover:bg-slate-200 hover:text-black
                            ${
                                da === selected
                                ? 'bg-blue-400'
                                : ''
                            }
                            `
                        }
                        onClick={() => setSelected(da)}
                        >
                            {da}
                        </button>

                    </div>
                ))}
                {nextMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] py-5 text-x"
                    key={da}
                    >
                        <button
                        className="border rounded-full w-[40px] h-[40px] text-gray-500 hover:bg-slate-200 hover:text-black"
                        onClick={() => changeMonth(month+1, da)}
                        >
                            {da}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}
