import Image from "next/image";
import BackGroundImage from "@/public/assets/images/01.jpg";

export default function Body() {
  return (
    <div
      className="hero__container"
      //   style={{ height: height, overflow: "hidden" }}
    >
      <div className="bg__img">
        <Image src={BackGroundImage} alt="background" />
      </div>
      {/* <Header /> */}

      <div className="madewith">
        <p>Made with react</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
          alt=""
          width={20}
        />
      </div>
      {/* <Weather /> */}
      {/* <MobileView /> */}

      {/* <BottomNav notify={notify} handleClose={handleClose} /> */}
    </div>
  );
}
