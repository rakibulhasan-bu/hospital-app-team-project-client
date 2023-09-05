import SectionHeading from "../../../components/sharedTitle/SectionHeading";
import image from "../../../assets/v3.png";
const BranchesHome = () => {
  return (
    <div className="w-full pt-10 pb-5 max-h-100vh">
      {/* <SectionHeading 
      title="Our branches"
      semiSubTitle="Serving Communities Across Nationwide"
      subTitle="
      Lifecare's Nationwide Hospital Network: 25+ Branches, 8 Divisions, One Mission - Your Health."
      /> */}
      <img src={image} alt="branches-map" width={""} className="z-0 w-full" />
      <div className="h-40 border border-orange-600 w-96">
        <div>

        </div>
        <img src="https://res.cloudinary.com/dth0nno0p/image/upload/v1693534293/hospital_kisskz.jpg" alt="" className="w-40 h-40"/>
      </div>
    </div>
  );
};

export default BranchesHome;
