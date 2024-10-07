import Link from "next/link";
import { useEffect, useState } from "react";
// import DraggableComponent from "./draggable-comp";

const BottomNav = () => {
  const [width, setWidth] = useState<number>(820);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the size

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* <DraggableComponent /> */}

      <div className="bg-white/40 absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-[900px] h-[60px] rounded-[20px] flex items-center justify-between px-[15px] py-[35px] gap-[10px]">
        {width < 820 && (
          <a href="tel:+234 8136080403">
            <div className="w-[50px] h-[50px]">
              <img
                src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </a>
        )}

        <a href="mailto:austinpaul606@gmail.com?subject=Hello from my portfolio">
          <div className="w-[50px] h-[50px]">
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </a>

        <Link href="/messages">
          <div className="w-[50px] h-[50px] relative">
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png"
              alt=""
              className="w-full h-full"
            />
            {/* {notify && (
            <div
              className="absolute bg-red-500 top-[-5px] right-0 w-[20px] h-[20px] rounded-full flex items-center justify-center"
            >
              <p className="text-white">1</p>
            </div>
          )} */}
          </div>
        </Link>

        <Link href="/profile">
          <div className="w-[50px] h-[50px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Contacts_%28iOS%29.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </Link>

        {width >= 820 && (
          <>
            <a
              href="https://github.com/ostin01"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-[50px] h-[50px]">
                <img
                  src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
                  alt=""
                  className="w-full h-full rounded-[15px]"
                />
              </div>
            </a>
            <div className="w-[50px] h-[50px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png"
                alt=""
                className="w-full h-full"
              />
            </div>

            <Link href="/projects">
              <div className="w-[50px] h-[50px]">
                <img
                  src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default BottomNav;
