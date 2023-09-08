import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";  
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Navigation } from "swiper/modules";
import '../style.css';
import AdCard from "./AdCard";


const AdSlider: React.FC = () => {
    const productData = [
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
        },



    ];

    return (
      <>
        <div className="container px-4 py-10 mx-auto">
            <div className="swiper-container" style={{ position: "relative" }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.ad-swiper-button-next', // Use a unique class name
                        prevEl: '.ad-swiper-button-prev', // Use a unique class name
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {productData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <AdCard
                                img={product.img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="ad-swiper-button-next swiper-button-custom" style={{
                    position: "absolute",
                    top: "50%",
                    right: "0px",
                    zIndex: "1",
                    width: "30px",
                    height: "50px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}></div>
                <div className="ad-swiper-button-prev swiper-button-custom" style={{
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    zIndex: "1",
                    background: "white",
                    width: "30px",
                    height: "50px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}></div>
            </div>
        </div>
      </>
    );
};

export default AdSlider;
