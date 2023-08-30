import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionHeading from "../../../components/sharedTitle/SectionHeading";

const images: { url: string; width: number; height: number }[] = [
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 400,
        height: 200,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 300,
        height: 450,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 200,
        height: 300,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 400,
        height: 400,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 250,
        height: 350,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 350,
        height: 200,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 200,
        height: 300,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 400,
        height: 200,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 200,
        height: 150,
    },
    {
        url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
        width: 200,
        height: 350,
    },
];

const GalleryHome: React.FC = () => {
    return (
        <>
            <SectionHeading
                semiSubTitle="What product do we have"
                title="Photo Gallery"
                subTitle="Check our pharmacy for your medicine and product"
            />
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            style={{ display: "block" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
};

export default GalleryHome;
