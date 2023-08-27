import testimonial from "../../../assets/testimonial.png";
import "../../../../src/index.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { FaCircle } from "react-icons/fa";
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
      <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2 ">
        <img
          src={"https://contessahealth.com/wp-content/uploads/2022/08/Website-Photos-5.png"}
          className="w-4/5 lg:min-h-[60vh] mx-auto bounce-up"
          alt="logo"
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
