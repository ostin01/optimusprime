"use client";
import Image from "next/image";
import Header from "./header";
import BottomNav from "./mobile-nav";
import BackGroundImage from "@/public/assets/images/02.jpg";
import { useEffect, useState } from "react";
import Weather from "./weather";
import { WeatherResponse } from "../schema/port";
import MobileView from "./mobile-view";

export default function Body({
  weather,
  weatherIcon,
}: {
  weather: WeatherResponse;
  weatherIcon: string;
}) {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>(600);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: height, width: "100%" }}>
      <div
        className={`full relative overflow-hidden flex flex-col justify-center h-full w-full`}
      >
        <div className="absolute inset-0 -z-10">
          {width < 600 ? (
            <Image
              src={BackGroundImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images3.alphacoders.com/135/thumb-1920-1351182.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <Header />
        <Weather weather={weather} weatherIcon={weatherIcon} />

        <MobileView />
        <BottomNav />
      </div>
    </div>
  );
}
