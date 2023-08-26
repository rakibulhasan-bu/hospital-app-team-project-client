import rightBanner from "../../../assets/rightBanner.png";
import heart from "../../../assets/heart-bg.png";
import virus from "../../../assets/virus.png";
import virus2 from "../../../assets/virus2.png";
import badge from "../../../assets/badge.png";
const RightSide = () => {
  return (
    <div className=" relative 2xl:pt-24 lg:pt-4">
      <img
        className="z-20 2xl:h-[610px] lg:h-[26rem]"
        src={rightBanner}
        alt=""
      />
      <img
        className="hidden lg:block md:block absolute lg:-left-[200px] md:-left-[140px] bottom-0 w-3/4 animate-pulse 2xl:-left-[300px] 2xl:bottom-[80px]"
        src={heart}
        alt=""
      />
      <div>
        <img
          style={{ animation: "spin 4s linear infinite" }}
          className="hidden lg:block absolute lg:right-[50px] md:right-0 md:top-[70px] lg:top-[115px] animate-spin 2xl:top-[180px] 2xl:right-24"
          src={virus2}
          alt=""
        />
        <img
          style={{ animation: "bounce 3s linear infinite" }}
          src={badge}
          className="hidden lg:block md:block absolute md:right-[35px] 2xl:right-[80px] 2xl:-bottom-[150px] md:-bottom-[50px] animate-bounce lg:w-[70%]"
          alt=""
        />
        {/* <img
          style={{ animation: "spin 4s linear infinite" }}
          src={virus2}
          className="hidden lg:block left-[70px]  top-[220px] animate-spin"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default RightSide;
