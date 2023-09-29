import { ChevronRight, ChevronLeft } from "react-feather"


export default function Pagination({setDate, calendarInfo}) {
    const month = calendarInfo.month
    const year = calendarInfo.year

    const changeMonth = (month) => {
        if (month > 11) {
            const newDate = new Date(year+1, 0, 1)
            setDate(newDate)
        } else if (month < 0) {
            const newDate = new Date(year-1, 11, 1)
            setDate(newDate)
        } else {
            const newDate = new Date(year, month, 1)
            setDate(newDate)
        }
    }

    return (
        <div className="w-full flex justify-between">
            <button
            className="hover:text-blue-500 flex items-center"
            onClick={() => changeMonth(month-1)}
            >
                <ChevronLeft
                size={30}
                />
                <div>
                    { month === 0
                        ? calendarInfo.monthNames[11]
                        : calendarInfo.monthNames[month-1]
                    }
                </div>
            </button>
            <button
            className="hover:text-blue-600 flex items-center"
            onClick={() => changeMonth(month+1)}
            >
                <div>
                    { month === 11
                        ? calendarInfo.monthNames[0]
                        : calendarInfo.monthNames[month+1]
                    }
                </div>
                <ChevronRight
                size={30}
                />
            </button>
        </div>
    )
}
