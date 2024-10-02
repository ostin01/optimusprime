"use client";
import Image from "next/image";
import Header from "./header";
import BottomNav from "./mobile-nav";
import BackGroundImage from "@/public/assets/images/02.jpg";
import { useBrowserHeight } from "../constant/Height";

export default function Body() {
  const height = useBrowserHeight();
  return (
    <div
      className={`full relative overflow-hidden flex flex-col justify-center h-screen ${height}`}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={BackGroundImage}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <Header />
      <BottomNav />
    </div>
  );
}
