import SectionHeading from "../../../components/sharedTitle/SectionHeading";

const BranchesHome = () => {
  return (
    <div className="bg-[#efefef] max-h-100vh pt-10 pb-5 w-full">
      <SectionHeading 
      title="Our branches"
      semiSubTitle="Serving Communities Across 8 Divisions Nationwide"
      subTitle="
      Lifecare's Nationwide Hospital Network: 25+ Branches, 8 Divisions, One Mission - Your Health."
      />
      <img
        src="https://res.cloudinary.com/dth0nno0p/image/upload/v1693736755/map_xt64sf.png"
        alt="branches-map"
        width={''}
        className="w-1/2"
      />
   
    </div>
  );
};

export default BranchesHome;
