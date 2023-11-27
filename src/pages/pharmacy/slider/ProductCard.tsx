import React from "react";

interface ProductCardProps {
  img: string;
  title: string;
  cashback: string;
  price: string;
  discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  img,
  title,
  cashback,
  price,
  discount,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg w-64 hover:shadow-lg transition duration-300 ease-in-out">
      <img
        src={img}
        alt="Product"
        className="w-full h-32 object-contain rounded-md mb-2"
      />
      <h2 className="font-semibold text-base mb-2">{title}</h2>
      <div className="text-gray-600">{cashback}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">{price}</span>
        <span className="text-xs text-red-500">{discount}</span>
      </div>
      <button className="bg-blue-500 text-white w-full mt-4 py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
