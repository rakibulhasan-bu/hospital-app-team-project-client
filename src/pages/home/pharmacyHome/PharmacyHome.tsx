import SectionHeading from "../../../components/sharedTitle/SectionHeading";
import PharmacyCard from "./pharmacyCard";

const PharmacyHome = () => {
    return (
        <div className=''>
            <SectionHeading
             semiSubTitle="What out patients says about us"
             title="Happy Clients"
             subTitle="Patient Voices : A Glimpse into LifeCare Hospital Through the Eyes of Those We've Cared For."
            />
            <PharmacyCard></PharmacyCard>
        </div>
    );
};

export default PharmacyHome;