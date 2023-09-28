import Link from "next/link"

export default function Landing() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl py-5">Welcome to CalendarCraft</h1>
      <div>
        <Link href="/calendar">
          <button
            className="border-2 border-gray-500 rounded-md py-2 px-1 bg-sky-400 text-black hover:bg-blue-400"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
