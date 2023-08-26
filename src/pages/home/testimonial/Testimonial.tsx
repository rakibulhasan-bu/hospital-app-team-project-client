import testimonial from "../../../assets/testimonial.png";
import "../../../../src/index.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="container px-2 mx-auto lg:px-0">
      <h1 className="text-4xl font-semibold text-center">
        What our patients say
      </h1>
      <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2 ">
        <img src={testimonial} className="h-[60vh] mx-auto bounce-up" alt="logo" />

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full mx-auto mySwiper"
        >
          <SwiperSlide>
            slide 1
          </SwiperSlide>
          <SwiperSlide>
            slide 2
          </SwiperSlide>
          <SwiperSlide>
            slide 3
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
