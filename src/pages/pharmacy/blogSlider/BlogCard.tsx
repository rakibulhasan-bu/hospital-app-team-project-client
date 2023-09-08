import React from 'react';

interface BlogCardProps {
  img: string;
  description: string; // Added a description prop for the <p> tag content
}

const BlogCard: React.FC<BlogCardProps> = ({ img, description }) => {
  return (
    <div className="bg-white rounded-lg w-auto hover:shadow-lg transition duration-300 ease-in-out mx-2">
      <img src={img} alt="Blog Image" className="object-contain rounded-md mb-2" />
      <p className="px-4 py-2">{description}</p> {/* Added <p> tag under the image */}
    </div>
  );
};

export default BlogCard;
