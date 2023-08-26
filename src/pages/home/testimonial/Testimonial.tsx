import testimonial from "../../../assets/testimonial.png";
import "../../../../src/index.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="container px-2 mx-auto lg:px-0">
      <h1 className="text-4xl font-semibold text-center">
        What our patients say
      </h1>
      <div className="grid items-center justify-center grid-cols-1 gap-2 md:grid-cols-2 ">
        <img
          src={testimonial}
          className="h-[60vh] mx-auto bounce-up"
          alt="logo"
        />

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-lg p-10 bg-accent rounded-2xl">
              <h5>July 03,2023</h5>
              <div className="flex gap-2 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                eaque nemo facilis ab modi quisquam blanditiis nulla, quod
                aliquam minus culpa ipsam maiores numquam eligendi? Qui quia
                maiores obcaecati pariatur.aaaaaaaaaaaaaaaaaaa
              </p>
              <h2>Jenifer Robinson</h2>
              <h5>Texus, USA</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
