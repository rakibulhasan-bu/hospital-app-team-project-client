import bg from "../../../assets/v3.png";
import BranchesCard from "../../../components/Banches/BranchesCard";

const BranchesHome = () => {
  return (
    <div
      className="w-full py-8"
      style={{
        background: `url(${bg})`, // Set the background image here
        backgroundSize: "cover", // Optional: You can adjust backgroundSize based on your needs
      }}
    >
      {/* upper content div */}
      <div className="p-3 ml-auto w-max lg:p-10">
        <div className="my-10 text-right text-white capitalize">
          <h1 className="px-5 text-sm ">Serving Communities accross</h1>
          <div className="flex gap-3">
            <div className="w-1 bg-accent text-accent">.</div>
            <div className="w-1 bg-accent text-accent">.</div>
            <div className="w-3 bg-accent text-accent">.</div>
            {/* <div className="w-6 bg-accent text-accent">.</div> */}
            {/* <div className="w-6 bg-accent text-accent">.</div> */}
            <h1 className="flex-1 px-5 text-6xl font-bold text-blue-950 bg-accent">
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
        <BranchesCard />
        <div className="flex gap-4 my-4 rounded-lg">
          <BranchesCard />
          <BranchesCard />
        </div>
        <BranchesCard />

        <div className="flex flex-wrap justify-center gap-3 my-5">
          <button className=" btn plan-btn">Show all Branches</button>
          <button className=" btn common-btn">Show Branches Near You</button>
        </div>
      </div>
    </div>
  );
};

export default BranchesHome;
