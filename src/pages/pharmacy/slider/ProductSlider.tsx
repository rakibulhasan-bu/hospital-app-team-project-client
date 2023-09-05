import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";  // Import Swiper styles for navigation
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ProductCard from "./ProductCard";
import { Autoplay, Navigation } from "swiper/modules";


const ProductSlider: React.FC = () => {
    const productData = [
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },
        {
            img: 'https://i.ibb.co/cc4NZNf/health-and-nutrition.webp',
            title: 'Ensure Complete, Balanced Nutrition Drink Powder for...',
            cashback: '₹75.50 cashback',
            price: '$1509.9',
            discount: '39% Off',
        },


    ];

    return (
        <div className="container px-4 py-10 mx-auto">
            <div className="swiper-container" style={{ position: "relative" }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {productData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard
                                img={product.img}
                                title={product.title}
                                cashback={product.cashback}
                                price={product.price}
                                discount={product.discount}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-next" style={{
                    position: "absolute",
                    top: "50%",
                    right: "0px",
                    zIndex: "1",
                    width: "30px",
                    height: "50px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}></div>
                <div className="swiper-button-prev text" style={{
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
    );
};

export default ProductSlider;
