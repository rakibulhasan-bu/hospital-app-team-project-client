import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";  
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Navigation } from "swiper/modules";
import '../style.css';
import BlogCard from "./BlogCard"; 

const BlogSlider: React.FC = () => {
    const blogData = [ 
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        },
        {
            img: 'https://i.ibb.co/TKBvrkT/dr-morepen-deals.webp',
            description: 'Sample Blog Description 1'
        }
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
                        nextEl: '.blog-swiper-button-next',
                        prevEl: '.blog-swiper-button-prev', 
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogData.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <BlogCard
                                img={blog.img}
                                description={blog.description} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="next swiper-button-custom" style={{
                    position: "absolute",
                    top: "50%",
                    right: "0px",
                    zIndex: "1",
                    width: "30px",
                    height: "50px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}></div>
                <div className="prev swiper-button-custom" style={{
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

export default BlogSlider;
