"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Nav(){
const pathname=usePathname()
return(
  <div className="flex h-14 justify-around items-center w-full bg-gray-800 text-black">
          <h1 className="text-3xl font-bold text-blue-300">GOALSCAPE</h1>

          <div className="flex h-1/4 justify-around items-center w-3xl ">
            <Link 
              className={`hover:bg-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white delay-100 duration-300  px-3 py-1.5 rounded-2xl ${pathname==="/"?'bg-blue-500':""}`}
              href="/"
            >
              Home
            </Link>
        
            <Link
              className={`hover:bg-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 ${pathname==="/matches"?'bg-blue-500':""}  text-white delay-100 duration-300  px-3 py-1.5 rounded-2xl ${pathname==="/team"?'bg-blue-500':""}`}
              href="/matches"
            >
              MATCHES
            </Link>
            <Link
              className={`${pathname==="/News"?'bg-blue-500':""} hover:bg-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 text-white delay-100 duration-300  px-3 py-1.5 rounded-2xl ` }
              href="/News"
            >
              News
            </Link>
                <Link
              className={` text-white delay-100 duration-300  py-1.5 rounded-2xl ${pathname==="/lang"?'bg-blue-500':""}`}
              href="https://www.365scores.com"
            >
               <div className="flex flex-col hover:bg-blue-900  items-center bg-slate-950 justify-center">
            <h1 className="text-blue-500 text-2xl hover:text-white">365</h1>
            <div className="flex gap-1">
              <hr className="h-1 w-3 bg-amber-300" />
              <hr className="h-1 w-3 bg-green-600" />
              <hr className="h-1 w-3 bg-red-600" />
            </div>
            <div className="flex gap-1">
              <p id="score" className="  text-white text-sm score">
                SCORS
              </p>
            </div>
          </div>
            </Link>
          </div>
          <div className="bg-gray-700 rounded-2xl p-1 flex justify-around gap-2 ">
            <button className="cursor-pointer border-none text-red-50  hover:bg-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 delay-100 duration-300 ">
              Search
            </button>
            <input
              type="text"
              className="pl-2.5 text-white font-bold text-shadow-violet-950"
            ></input>
          </div>
        </div>)
}