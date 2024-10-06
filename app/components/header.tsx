import Link from "next/link";
import Time from "./time";
import { Apple, Wifi } from "iconsax-react";
import { day, dayInWords, month } from "@/app/constant/DateTime";

export default function Header() {
  return (
    <div className="absolute top-0 w-full text-white">
      <div className="w-[85%] mt-[10px] mx-auto md:hidden ">
        <Time />
      </div>
      <div className="hidden bg-black/40 backdrop-blur-lg p-1 md:flex   justify-between">
        {/* the first part */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <Apple size="16" color="white" variant="Bold" />
          <Link href="/about">About me</Link>
          <Link href="/about">Project</Link>
          <Link href="/about">Resume</Link>
          <a href="mailto:austinpaul606@gmail.com?subject=Hello from my portfolio">
            Email
          </a>
          <Link href="/messages">Help</Link>
        </div>
        {/* the second part */}

        <div className="flex items-center gap-[10px]">
          <Wifi variant="Bold" size={16} />
          <p className="text-xs mr-[5px]">
            {dayInWords} {month} {day}
          </p>
          <Time />
        </div>
      </div>
    </div>
  );
}
