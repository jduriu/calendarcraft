import Link from "next/link"

export default function Landing() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl py-5">Welcome to CalendarCraft</h1>
      <div>
        <Link href="/calendar">
          <button
            className=" transition ease-in-out duration-500 border-2 border-white rounded-md py-2 px-1 bg-black text-white hover:bg-blue-600 hover:scale-110"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
