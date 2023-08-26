import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="grid gap-1 p-10 m-3 shadow-xl lg:m-10 bg-accent/50 rounded-2xl text-textBlack/80 drop-shadow-2xls">
      <h5 className="text-right text-black">July 03,2023</h5>
      <div className="flex justify-end gap-1 text-amber-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <img
        src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/clients/client-01.jpg"
        alt="patient"
        className="absolute top-0 object-cover rounded-full left-5 w-36 h-36"
      />
      <p className="my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eaque nemo
        facilis ab modi quisquam blanditiis nulla, quod aliquam minus culpa
        ipsam maiores numquam eligendi? Qui quia maiores obcaecati pariatur. .
      </p>
      <h2 className="text-2xl font-bold text-black">Jenifer Robinson</h2>
      <h5>Texus, USA</h5>
    </div>
  );
};

export default TestimonialCard;
