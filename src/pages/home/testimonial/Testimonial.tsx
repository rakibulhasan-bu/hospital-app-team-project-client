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

const Testimonial = () => {
  return (
    <div className="container px-2 mx-auto my-10 text-xl lg:min-h-screen lg:px-0">
      <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2 ">
        <img
          src={testimonial}
          className="w-4/5 lg:min-h-[60vh] mx-auto bounce-up"
          alt="logo"
        />

        <div className="">
          <div className="text-right lg:mx-10">
            <h1 className="flex items-center justify-end gap-1 mb-5 text-2xl font-semibold text-secondary/90">
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
              <span className="mx-1">Happy Clients</span>
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
            </h1>
            <p className="text-4xl font-bold">
              What out patients says about us
            </p>
          </div>
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
