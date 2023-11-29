import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PopularDoctorCard from "./PopularDoctorCard";
import { useGetDoctorsQuery } from "../../../redux/features/doctor/doctorApi";

// interface Card {
//   img: string;
//   title: string;
//   number: string;
//   icon: any;
// }

const PopularDoctor: React.FC = () => {
  const { data } = useGetDoctorsQuery("");

  // const cardData: Card[] = [
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Heart surgery",
  //     number: "120",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  // ];

  return (
    <section
      data-aos="fade-up"
      className="bg-[#F7FCFC] h-[70vh] lg:py-10 2xl:py-6  min-h-[100vh] flex-col flex items-center justify-center"
    >
      <h1 className="flex items-center justify-center gap-1 text-2xl font-semibold text-center lg:mb-16 text-primary px-5">
        <FaCircle className="text-xs text-accent" />
        <FaCircle className="text-xl text-secondary" />
        <FaCircle className="text-xs text-accent" />
        <span className="mx-1 text-3xl text-center">
          Our <span className=" text-secondary">Popular</span> Doctor
        </span>
        <FaCircle className="text-xs text-accent" />
        <FaCircle className="text-xl text-secondary" />
        <FaCircle className="text-xs text-accent" />
      </h1>
      <div className="container px-4 py-10 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 28000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {data?.doctors?.map((card: any) => (
            <SwiperSlide key={card._id}>
              <PopularDoctorCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularDoctor;
