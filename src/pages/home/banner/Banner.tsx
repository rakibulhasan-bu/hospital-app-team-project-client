import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="lg:h-[87dvh] 2xl:h-[90dvh] bg-white bg-cover bg-center w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 justify-items-center container mx-auto px-5 gap-16">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Banner;
