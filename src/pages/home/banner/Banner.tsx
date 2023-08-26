import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <div className="lg:h-[90vh] mx-auto container flex justify-center ">
      <div className=" lg:flex items-center justify-between">
        <h1>kdjfhksdfkj</h1>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Banner;
