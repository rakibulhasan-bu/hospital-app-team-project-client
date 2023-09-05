import React from 'react';

interface AdCardProps {
  img: string;
}

const AdCard: React.FC<AdCardProps> = ({ img }) => {
  return (
    <div className="bg-white rounded-lg w-auto hover:shadow-lg transition duration-300 ease-in-out mx-2">
      <img src={img} alt="Product" className="object-contain rounded-md mb-2" />
    </div>
  );
};

export default AdCard;
