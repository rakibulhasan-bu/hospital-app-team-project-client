import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images: { url: string; width: number; height: number }[] = [
  {
    url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
    width: 400,
    height: 200,
  },
  {
    url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
    width: 200,
    height: 300,
  },
  {
    url: "https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg",
    width: 300,
    height: 500,
  },
  // ... add more images with different dimensions
];

const GalleryHome: React.FC = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images.map((image, i) => (
          <img
            key={i}
            src={`${image.url}/${image.width}/${image.height}`}
            style={{ width: "100%", display: "block" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryHome;
