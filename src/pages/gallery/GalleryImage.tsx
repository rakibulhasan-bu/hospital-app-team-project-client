import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface GalleryImageProps {
    images: string[];
}

const GalleryImage: React.FC<GalleryImageProps> = ({ images }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery ${index}`} className="w-full" />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default GalleryImage;
