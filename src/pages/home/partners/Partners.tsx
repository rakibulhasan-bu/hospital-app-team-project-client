import Marquee from "react-fast-marquee";
const Partners = () => {
    const image = [
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_6_znodor.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_3_vsnljn.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139009/Website-assets/LifeCare/pngegg_2_zn4mh8.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/Sheba.xyz_Logo_cdfc1n.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_1_cymmyz.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_4_hghuv0.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_5_l6dlsh.png",
        "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693139008/Website-assets/LifeCare/pngegg_yty145.png",
    ]
    return (
        <div  className='px-2 lg:px-0 py-12'>
            <h1 data-aos="fade-down" className="text-[34px] leading-[34px] text-textBlack font-extrabold text-center pb-12">Our valuable <span className="text-secondary">Partners</span></h1>
            <Marquee>
                <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className='flex items-center gap-20 pl-20'>
                    {
                        image.map((img, index) => {
                            return <div key={index} className='w-28 h-20'>
                                <img className="h-full w-full object-contain" src={img} alt="" />
                            </div>
                        })
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;