import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
      }}
      className="lg:min-h-[90vh] 2xl:min-h-[84vh] bg-white bg-cover bg-center overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 justify-items-center container mx-auto px-5 gap-16 items-center">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Banner;
