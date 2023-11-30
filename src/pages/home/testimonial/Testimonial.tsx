import hospital from "../../../assets/hospital.png";
import "../../../../src/index.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import SectionHeading from "../../../components/sharedTitle/SectionHeading";

const Testimonial = () => {
  return (
    <div className="container mx-auto my-10 text-xl lg:min-h-screen lg:px-0">
      <SectionHeading
        semiSubTitle="What out patients says about us"
        title="Happy Clients"
        subTitle="Patient Voices : A Glimpse into LifeCare Hospital Through the Eyes of Those We've Cared For."
      />
      <div
        data-aos="fade-up"
        className="grid items-center justify-center grid-cols-1 my-10 gap-x-3 gap-y-10 md:grid-cols-2"
      >
        <img
          src={hospital}
          className="w-full lg:min-h-[60vh] mx-auto bounce-up rounded-2xl"
          alt="reviews"
        />
        <div data-aos="fade-up" className="">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="w-full mySwiper"
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
