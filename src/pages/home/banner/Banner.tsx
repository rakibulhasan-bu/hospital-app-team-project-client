import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
      }}
      className="lg:h-[83dvh] 2xl:h-[90dvh] bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center container mx-auto px-5 gap-16">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Banner;
