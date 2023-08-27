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
import SharedTitle from "../../../components/sharedTitle/SharedTitle";

const Testimonial = () => {
  return (
    <div className="container px-2 mx-auto my-10 text-xl lg:min-h-screen lg:px-0">
      <SharedTitle
        key={"testimonial"}
        title="What out patients says about us"
        largeTitle="Happy"
        coloredTitle="Clients"
        subTitle="Patient Voices : A Glimpse into LifeCare Hospital Through the Eyes of Those We've Cared For."
      />
      <div className="grid items-center justify-center grid-cols-1 my-10 gap-x-3 gap-y-10 md:grid-cols-2">
        <img
          src={hospital}
          className="w-full lg:min-h-[60vh] mx-auto bounce-up rounded-2xl"
          alt="reviews"
        />
        <div className="">
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
