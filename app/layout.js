
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import Nav from "./nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
 title: 'أخبار كرة القدم',
  description: 'أفضل موقع لعرض نتائج وأخبار كرة القدم',
  keywords: 'كرة قدم, مباريات, نتائج, أخبار',
  verification:{
   google :"9ra37WCLYp1GTwRFdKSzi-y75EI2qAkYiGF3Zfa-428" 
  }
};

export default function RootLayout({ children }) {
   return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased bg-gray-900   `}
      >
      
<Nav/>
        {children}
        <div className="flex justify-around items-center  ">
          <div className="flex flex-col items-center bg-slate-950 justify-center">
            <h1 className="text-blue-500 text-4xl">365</h1>
            <div className="flex gap-1">
              <hr className="h-1 w-4 bg-amber-300" />
              <hr className="h-1 w-4 bg-green-600" />
              <hr className="h-1 w-4 bg-red-600" />
            </div>
            <div className="flex gap-1">
              <p id="score" className="  text-white score">
                SCORS
              </p>
            </div>
          </div>
          <div className="p-1.5 bg-orange-600">
            <div className=" border-x-4 border-t-4 p-0.5 border-black">
              <p className="text-black font-bold">
                GOAL<sup>*</sup>
              </p>
            </div>
          </div>

          <div className="p-2 rounded-full w-14 h-14 items-center bg-white flex justify-between gap-1.5 ">
            <div className="bg-black w-3 h-3"></div>
            <div className="bg-black w-3 h-3"></div>
            <div className="bg-black w-3 h-3"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
