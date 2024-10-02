"use client";
import { useEffect, useState } from "react";

export const useBrowserHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setHeight((window.innerHeight / 100) * 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return height;
};
