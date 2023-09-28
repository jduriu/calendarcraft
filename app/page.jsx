import Calendar from "@/components/Calendar";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div className="flex flex-col m-10">
      <div className="flex py-3 px-2 justify-between">
        <h1 className="text-3xl">Month Label</h1>
        <div>
          <Pagination/>
        </div>
      </div>
      <div className="py-3 px-2 w-full h-full">
        <Calendar/>
      </div>
    </div>
  )
}
