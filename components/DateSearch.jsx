import { Search } from 'react-feather'
import { useState } from 'react'

export default function DateSearch({setDate}) {
    const [searchInput, setSearchInput] = useState('')
    const [validInput, setValidInput] = useState(true)

    const handleSearchInput = (e) => {
        e.preventDefault
        setValidInput(true)
        setSearchInput(e.target.value)
    }

    const searchCalendar = () => {
        const input = searchInput.split('/')
        try {
            const month = parseInt(input[0]) -1
            const day = parseInt(input[1])
            const year = parseInt(input[2])
            if (month >= 0  && month <= 11 && day >= 1 && day <=31 && input[2].length === 4) {
                setValidInput(true)
                const newDate = new Date(year, month, day)
                setDate(newDate)
                setSearchInput('')
            } else {
                setValidInput(false)
            }
        } catch(e) {
            setValidInput(false)
        }
    }

    return (
        <div className="flex flex-col justify-center items-end">
            <div className="flex gap-3 items-center">
                <input
                className="text-black w-[125px] text-center p-1 rounded-lg"
                placeholder="MM/DD/YYYY"
                value={searchInput}
                onChange={handleSearchInput}
                />
                <Search
                size={30}
                onClick={searchCalendar}
                />
            </div>
            {validInput
                ? null
                : <div className="text-red-700 text-sm pt-2">Incorrect format, please use MM/DD/YYYY</div>
            }
        </div>
    )
}
