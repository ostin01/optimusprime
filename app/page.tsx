import Image from "next/image";
import Header from "./components/header";
import BackGroundImage from "@/public/assets/images/02.jpg";
import BottomNav from "./components/mobile-nav";

export default function Home() {
  return (
    <div className="full relative overflow-hidden flex flex-col justify-center h-screen">
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
