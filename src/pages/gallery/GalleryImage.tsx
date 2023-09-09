import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaSearch } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './style.css'
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
                    <div key={index} className="m-1 relative overflow-hidden rounded-md shadow-md hover:opacity-100">
                        <CSSTransition
                            in={true}
                            timeout={300}
                            classNames="zoom"
                        >
                            <img src={image} alt={`Gallery ${index}`} className="w-full transition-transform duration-300" />
                        </CSSTransition>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <FaSearch size={32} color="white" />
                        </div>
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default GalleryImage;
