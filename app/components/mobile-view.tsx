import Link from "next/link";

import React from "react";

export default function MobileView() {
  return (
    <div className="w-[90%] mx-auto flex justify-between text-center text-white md:hidden">
      <Link href="/projects">
        <div>
          <div className="w-[60px] h-[60px]">
            <img
              src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[12px] mt-1">Projects</p>
        </div>
      </Link>

      <div>
        <div className="w-[60px] h-[60px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[12px] mt-1">Resume</p>
      </div>

      <a href="https://github.com/ostin01" target="_blank" rel="noreferrer">
        <div>
          <div className="w-[60px] h-[60px]">
            <img
              src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
              alt=""
              className="w-full h-full object-cover rounded-[15px]"
            />
          </div>
          <p className="text-[12px] mt-1">Github</p>
        </div>
      </a>
    </div>
  );
}
