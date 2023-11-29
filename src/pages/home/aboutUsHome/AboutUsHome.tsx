import { FaAward, FaCheckDouble } from "react-icons/fa";
import SectionHeading from "../../../components/sharedTitle/SectionHeading";

const AboutUsHome = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="3000">
        <SectionHeading
          semiSubTitle="What should you trust us"
          title="About Us"
          subTitle="Check our pharmacy for your medicine and product"
        />
      </div>
      <section className="container mx-auto px-4 md:px-0 my-8 flex flex-col md:flex-row gap-8">
        <div data-aos="fade-up-right" className="relative w-full md:w-3/6">
          <img
            src="https://i.ibb.co/3FKGpDW/pexels-tima-miroshnichenko-5452293.jpg"
            alt=""
            className="w-full h-5/6 rounded-lg"
          />
          <div className="absolute top-96 md:top-1/2 left-72 md:left-3/4 -translate-x-1/2 -translate-y-1/2 text-white bg-secondary p-8">
            <FaAward className="my-4 text-6xl font-bold" />
            <p className="my-4 text-4xl font-bold">45</p>
            <p className="text-xl font-bold">
              Years Of <br /> Experience
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          className="flex flex-col gap-4 ml-0 md:ml-6 pt-10 md:mt-0 "
        >
          <p className="text-secondary font-semibold">
            Welcome To Best Medical & Health Care
          </p>
          <h1 className="text-3xl font-bold text-primary mb-5">
            Get Best & Amazing Experience With <br /> Our Professional Doctors
          </h1>
          <p className="text-textBlack mb-4">
            Life Are A Medical And Health Department Provider Institutions.
            <br /> Suitable For Healthcare, Medical, Doctor, Dental, Dentist,
            Pharmacy, Health And Any Related Medical Care Field.
          </p>
          <div className="flex ">
            <div className="">
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-0 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
            </div>
            <div className="gap-4">
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
              <div className="mb-4 md:mb-4 md:mr-6 flex items-center">
                <FaCheckDouble className="text-secondary mr-2" />
                <p className="text-secondary font-semibold">
                  Professional Doctors
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img
              src="https://i.ibb.co/2hvDJ01/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg"
              alt="img"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">Dr Anwar Ramadan</p>
              <p>Executive Director</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHome;
