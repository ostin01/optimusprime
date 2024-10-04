"use client";
import Image from "next/image";
import Header from "./header";
import BottomNav from "./mobile-nav";
import BackGroundImage from "@/public/assets/images/02.jpg";
import { useEffect, useState } from "react";

export default function Body() {
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  const appheight = height;
  console.log(appheight);
  return (
    <div style={{ height: appheight }}>
      <div
        className={`full relative overflow-hidden flex flex-col justify-center h-full`}
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
    </div>
  );
}
