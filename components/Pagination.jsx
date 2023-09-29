import { ChevronRight, ChevronLeft } from "react-feather"


export default function Pagination({setDate, month, year}) {
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
        <div className="flex flex-between gap-8">
        <button className="hover:text-blue-500">
            <ChevronLeft
            size={30}
            onClick={() => changeMonth(month-1)}
            />
        </button>
        <button className="hover:text-blue-600">
            <ChevronRight
            size={30}
            onClick={() => changeMonth(month+1)}
            />
        </button>
        </div>
    )
}
