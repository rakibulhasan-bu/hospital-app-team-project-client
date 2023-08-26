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
      className="lg:h-[100vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center container mx-auto px-5 gap-5">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Banner;
