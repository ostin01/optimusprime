"use client";
// import Image from "next/image";
import Header from "./header";
import BottomNav from "./mobile-nav";
// import BackGroundImage from "@/public/assets/images/02.jpg";
import { useEffect, useState } from "react";

export default function Body() {
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  return (
    <div style={{ height: height, width: "100%" }}>
      <div
        className={`full relative overflow-hidden flex flex-col justify-center h-full w-full`}
      >
        <div className="absolute inset-0 -z-10">
          <img
            // src={BackGroundImage}
            src="https://images3.alphacoders.com/135/thumb-1920-1351182.png"
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
