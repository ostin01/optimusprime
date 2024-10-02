import Link from "next/link";
// import "./bottomnav.css";

const BottomNav = () => {
  const width = 820;
  return (
    <div className="bg-white/40 absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-15 rounded-xl flex items-center justify-between px-4 py-9">
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
          />
        </div>
      </a>

      <Link href="/messages">
        <div
          className="w-[50px] h-[50px]"
          style={{ position: "relative" }}
          //   onClick={handleClose}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png"
            alt=""
          />
          {/* {notify && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "red",
                top: -5,
                right: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <p>1</p>
            </div>
          )} */}
        </div>
      </Link>

      <Link href="/about">
        <div className="w-[50px] h-[50px] ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Contacts_%28iOS%29.png"
            alt=""
          />
        </div>
      </Link>
      {width >= 820 && (
        <>
          <a
            href="https://github.com/Fitzstiles"
            target="_blank"
            rel="noreferrer"
          >
            <div className="w-[50px] h-[50px]">
              <img
                src="https://upcdn.io/FW25bBB/image/content/app_logos/e71493b6-3fb2-4532-b850-bc45b937142c.webp?f=webp&w=1920&q=85&fit=shrink-cover"
                style={{ borderRadius: 15 }}
                alt=""
              />
            </div>
          </a>
          <div className="w-[50px] h-[50px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png"
              alt=""
            />
          </div>

          <Link href="/projects">
            <div className="w-[50px] h-[50px]">
              <img
                src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
                alt=""
              />
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default BottomNav;
