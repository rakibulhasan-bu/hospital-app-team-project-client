import testimonial from "../../../assets/testimonial.png";
import "../../../../src/index.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FaCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";

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
              <div className="grid gap-1 p-10 m-3 shadow-xl lg:m-10 bg-accent/50 rounded-2xl text-textBlack/80 drop-shadow-2xls card">
                <h5 className="text-black">July 03,2023</h5>
                <div className="flex gap-1 text-amber-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <p className="my-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  eaque nemo facilis ab modi quisquam blanditiis nulla, quod
                  aliquam minus culpa ipsam maiores numquam eligendi? Qui quia
                  maiores obcaecati pariatur. .
                </p>
                <h2 className="text-2xl font-bold text-black">
                  Jenifer Robinson
                </h2>
                <h5>Texus, USA</h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
