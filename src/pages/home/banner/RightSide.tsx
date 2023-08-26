import rightBanner from "../../../assets/rightBanner.png";
import heart from "../../../assets/heart-bg.png";
import virus from "../../../assets/virus.png";
import virus2 from "../../../assets/virus2.png";
import badge from "../../../assets/badge.png";
const RightSide = () => {
  return (
    <div className=" relative lg:pt-24">
      <img className="z-20" src={rightBanner} alt="" />
      <img
        className="hidden lg:block md:block absolute lg:-left-[315px] md:-left-[140px] bottom-0 w-3/4 animate-pulse z-10"
        src={heart}
        alt=""
      />
      <div>
        <img
          style={{ animation: "spin 4s linear infinite" }}
          className="hidden lg:block absolute lg:right-[180px] md:right-0 md:top-[70px] lg:top-[230px] animate-spin"
          src={virus2}
          alt=""
        />
        <img
          style={{ animation: "bounce 3s linear infinite" }}
          src={badge}
          className="hidden lg:block md:block absolute md:right-[35px] lg:right-[150px] lg:-bottom-[150px] md:-bottom-[50px] animate-bounce md:w-2/3"
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
