'use client'

import CalendarGrid from "@/components/CalendarGrid";
import Pagination from "@/components/Pagination";
import DateSearch from "@/components/DateSearch";
import { getCalendarInfo } from "@/utils/date";
import { useState, useEffect } from "react";
import Joke from "@/components/Joke";


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
        <div className="flex justify-between">
          <h1 className="text-3xl">{calendarInfo.monthName} {calendarInfo.year}</h1>
          <div className="flex justify-center items-center gap-5">
          </div>
          <DateSearch
          setDate={setDate}
          />
        </div>
        <div className="py-8 px-8">
          <Pagination
          setDate={setDate}
          calendarInfo={calendarInfo}
          />
        </div>
        <div className="px-8">
          <CalendarGrid
          calendarInfo={calendarInfo}
          selected={selected}
          setDate={setDate}
          />
        </div>
        <div></div>
        {calendarInfo.april1st
          ?
          <div className="flex justify-center pt-5">
            <Joke/>
          </div>
          :
            null
        }
      </div>

  )
}
