'use client'

import CalendarGrid from "@/components/CalendarGrid";
import Pagination from "@/components/Pagination";
import { getCalendarInfo } from "@/utils/date";
import { useState, useEffect } from "react";


export default function Calendar() {
  const today = new Date()
  const [date, setDate] = useState(today)
  const [calendarInfo, setCalendarInfo] = useState(getCalendarInfo(date))
  const [selected, setSelected] = useState(date.getDate())

  useEffect(() => {
    setCalendarInfo(getCalendarInfo(date))
    setSelected(date.getDate())
  }, [date])


  return (
      <div className="flex flex-col m-10">
        <div className="flex py-3 px-2 justify-between">
          <h1 className="text-3xl">{calendarInfo.monthName} {calendarInfo.year}</h1>
          <div>
            <Pagination/>
          </div>
        </div>
        <div className="py-3 px-2 h-full">
          <CalendarGrid
          calendarInfo={calendarInfo}
          setSelected={setSelected}
          selected={selected}
          setDate={setDate}
          />
        </div>
      </div>

  )
}
