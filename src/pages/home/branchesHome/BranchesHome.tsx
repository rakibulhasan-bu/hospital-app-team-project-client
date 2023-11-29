import bg from "../../../assets/v3.png";
import BranchesCard from "../../../components/Banches/BranchesCard";

const BranchesHome = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="w-full py-8 object-left"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      {/* upper content div */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="p-3 ml-auto lg:p-10 lg:w-max"
      >
        <div className="my-10 text-right text-white capitalize">
          <h1 className="px-5 text-sm text-center">
            Serving Communities accross
          </h1>
          <div className="flex gap-3">
            <div className="w-1 bg-accent text-accent">.</div>
            <div className="w-1 bg-accent text-accent">.</div>
            <div className="w-3 bg-accent text-accent">.</div>
            <h1 className="flex-1 px-5 lg:text-6xl text-3xl text-center font-bold text-blue-950 bg-accent">
              Nationwide
            </h1>
          </div>
          <h1 className="px-5 text-sm ">
            <span className="text-secondary">8 </span> Divisions,{" "}
            <span className="text-secondary">30+ </span> Districts,{" "}
            <span className="text-secondary">One </span> Mission -{" "}
            <span className="text-secondary">Your Health </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <BranchesCard />
          </div>
          <BranchesCard />
          <BranchesCard />
          <div className="md:col-span-2">
            <BranchesCard />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 my-5">
          <button className=" btn plan-btn">Show all Branches</button>
          <button className=" btn common-btn">Show Branches Near You</button>
        </div>
      </div>
    </div>
  );
};

export default BranchesHome;
