import image from "../../../assets/v3.png";
import BranchesCard from "../../../components/Banches/BranchesCard";
const BranchesHome = () => {
  return (
    <div className="w-full pt-10 pb-5 max-h-100vh">
      {/* background image */}
      <img src={image} alt="branches-map" width={""} className="z-0 w-full" />
      {/* upper content div */}
      <div className="ml-auto w-max">
        {/* <SectionHeading
            title="Our branches"
            semiSubTitle="Serving Communities Across Nationwide"
            subTitle="Lifecare's Nationwide Hospital Network: 25+ Branches, 8 Divisions, One Mission - Your Health."
          /> */}
        <BranchesCard />
        <div className="flex gap-4 my-4 rounded-lg">
          <BranchesCard />
          <BranchesCard />
        </div>
        <BranchesCard />
      </div>
    </div>
  );
};

export default BranchesHome;
