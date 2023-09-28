export default function CalendarGrid({calendarInfo}) {

    const dayNames = calendarInfo.daysOfWeek

    const prevMonthDays = calendarInfo.prevMonthDays
    const curMonthDays = calendarInfo.curMonthDays
    const nextMonthDays = calendarInfo.nextMonthDays

    const days = Array.from("#".repeat(35))

    return (
        <div className="p-10 h-full">
            <div className="flex flex-wrap justify-between mb-6">
                {dayNames.map((d) => (
                    <div
                    className="flex justify-center w-[14.2%] h-[20%] text-2xl"
                    key={d}
                    >
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap justify-between">
                {prevMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] h-[20%] py-5 text-x"
                    key={da}
                    >
                        <button className="border rounded-full w-[40px] h-[40px] text-blue-600 hover:bg-blue">
                            {da}
                        </button>
                    </div>
                ))}
                {curMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] h-[20%] py-5 text-x"
                    key={da}
                    >
                        <button className="border rounded-full w-[40px] h-[40px] text-white hover:bg-blue">
                            {da}
                        </button>
                    </div>
                ))}
                {nextMonthDays.map((da) => (
                    <div
                    className="flex justify-center w-[14.2%] h-[20%] py-5 text-x"
                    key={da}
                    >
                        <button className="border rounded-full w-[40px] h-[40px] text-blue-600 hover:bg-blue-400">
                            {da}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}
