import SectionHeading from "../../../components/sharedTitle/SectionHeading";
import PharmacyCard from "./PharmacyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


interface Card {
    img: string;
    title: string;
  }

const PharmacyHome: React.FC = () => {
    const cardData: Card[] = [
        {
          img: "https://i.ibb.co/sp7JHWr/babycare.webp",
          title: "Baby Care",
        },
        {
          img: "https://i.ibb.co/HtqBSHx/glucometer-strips.webp",
          title: "Glucometer Strips",
        },
        {
          img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
          title: "Heanth and Newtrition",

        },
        {
          img: "https://i.ibb.co/fGqNXk9/healthdevices.webp",
          title: "Health Device",
        },
        {
            img: "https://i.ibb.co/vwfrhXq/personalcare.webp",
            title: "Personal Care",
          },
        {
            img: "https://i.ibb.co/bWL31Yd/apollo-products.webp",
            title: "Lifecare Product",
          },
          {
            img: "https://i.ibb.co/h8VBj58/ayurvedic-range.webp",
            title: "Ayurvedic RangeS",
          },
          {
            img: "https://i.ibb.co/xKvd4Tm/sexualwellness.webp",
            title: "Sexual Wellness",
          },
          {
            img: "https://i.ibb.co/VVHHx2k/womencare.webp",
            title: "Women Care",
          },
      ];

    return (
        <div className=''>
            <SectionHeading
             semiSubTitle="What product do we have"
             title="Our Pharmacy"
             subTitle="Check our pharmacy for your medicine and product"
            />
             <div className="container px-4 py-10 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="my-12">
              <PharmacyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
    );
};

export default PharmacyHome;