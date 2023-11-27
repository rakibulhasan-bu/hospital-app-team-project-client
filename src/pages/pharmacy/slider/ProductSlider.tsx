import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ProductCard from "./ProductCard";
import { Autoplay, Navigation } from "swiper/modules";
import "../style.css";
import { useGetProductsQuery } from "../../../redux/api/baseApi";

type Products = {
  cashback: string;
  imageUrl: string;
  description: string;
  name: string;
  newPrice: string;
  oldPrice: string;
  _id: string;
};

const ProductSlider: React.FC = () => {
  const { data } = useGetProductsQuery("");
  console.log(data);

  const productData = [
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
    {
      img: "https://i.ibb.co/cc4NZNf/health-and-nutrition.webp",
      title: "Ensure Complete, Balanced Nutrition Drink Powder for...",
      cashback: "₹75.50 cashback",
      price: "$1509.9",
      discount: "39% Off",
    },
  ];

  return (
    <>
      <div className="container px-4 py-10 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-primary font-bold">Products</h2>
          <button className=" text-secondary px-4 rounded hover:bg-blue-100">
            View All
          </button>
        </div>
        <div className="swiper-container" style={{ position: "relative" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".product-swiper-button-next",
              prevEl: ".product-swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data?.products?.map((product: Products) => (
              <SwiperSlide key={product._id}>
                <ProductCard
                  img={product.imageUrl}
                  title={product.name}
                  cashback={product.cashback}
                  price={product.newPrice}
                  discount={product.oldPrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="next swiper-button-custom"
            style={{
              position: "absolute",
              top: "50%",
              right: "0px",
              zIndex: "1",
              width: "30px",
              height: "50px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          ></div>
          <div
            className="prev swiper-button-custom"
            style={{
              position: "absolute",
              top: "50%",
              left: "0px",
              zIndex: "1",
              background: "white",
              width: "30px",
              height: "50px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
