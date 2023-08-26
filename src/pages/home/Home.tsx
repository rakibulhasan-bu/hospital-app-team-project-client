import AboutUsHome from "./aboutUsHome/AboutUsHome";
import Banner from "./banner/Banner";
import BranchesHome from "./branchesHome/BranchesHome";
import Faq from "./faq/Faq";
import GalleryHome from "./galleryHome/GalleryHome";
import NewsMediaHome from "./newsMediaHome/NewsMediaHome";
import Partners from "./partners/Partners";
import PharmacyHome from "./pharmacyHome/PharmacyHome";
import PopularDoctor from "./popularDoctor/PopularDoctor";
import Specialities from "./specialities/Specialities";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <PopularDoctor />
      <GalleryHome />
      <Specialities />
      <AboutUsHome />
      <PharmacyHome />
      <BranchesHome />
      <Testimonial />
      <NewsMediaHome />
      <Faq />
      <Partners />
    </div>
  );
};

export default Home;
