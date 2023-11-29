import SectionHeading from "../../../components/sharedTitle/SectionHeading";
import PharmacyCard from "./PharmacyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetAllProductQuery } from "../../../redux/features/product/productApi";

interface SingleProduct {
  _id: undefined;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  cashback: number;
  imageUrl: string;
}

const PharmacyHome: React.FC = () => {
  const { data } = useGetAllProductQuery("");

  // const cardData: Card[] = [
  //   {
  //     img: "https://i.ibb.co/sp7JHWr/babycare.webp",
  //     title: "Baby Care",
  //   },
  //   {
  //     img: "https://i.ibb.co/HtqBSHx/glucometer-strips.webp",
  //     title: "Glucometer Strips",
  //   },
  //   {
  //     img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
  //     title: "Heanth and Newtrition",
  //   },
  //   {
  //     img: "https://i.ibb.co/fGqNXk9/healthdevices.webp",
  //     title: "Health Device",
  //   },
  //   {
  //     img: "https://i.ibb.co/vwfrhXq/personalcare.webp",
  //     title: "Personal Care",
  //   },
  //   {
  //     img: "https://i.ibb.co/bWL31Yd/apollo-products.webp",
  //     title: "Lifecare Product",
  //   },
  //   {
  //     img: "https://i.ibb.co/h8VBj58/ayurvedic-range.webp",
  //     title: "Ayurvedic RangeS",
  //   },
  //   {
  //     img: "https://i.ibb.co/xKvd4Tm/sexualwellness.webp",
  //     title: "Sexual Wellness",
  //   },
  //   {
  //     img: "https://i.ibb.co/VVHHx2k/womencare.webp",
  //     title: "Women Care",
  //   },
  // ];

  return (
    <div className="">
      <div data-aos="fade-up" data-aos-duration="3000">
        <SectionHeading
          semiSubTitle="What product do we have"
          title="Our Pharmacy"
          subTitle="Check our pharmacy for your medicine and product"
        />{" "}
      </div>
      <div data-aos="fade-down" className="container px-4 py-10 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {data?.products?.map((card: SingleProduct) => (
            <SwiperSlide key={card._id} className="my-12">
              <PharmacyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PharmacyHome;
