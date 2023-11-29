import React from "react";
import SectionHeading from "../../../components/sharedTitle/SectionHeading";

const GalleryHome: React.FC = () => {
  return (
    <section className="py-16" data-aos="fade-down">
      <SectionHeading
        data-aos="fade-down"
        semiSubTitle="What product do we have"
        title="Hospital Gallery"
        subTitle="At Lifecare Hospital. We have been actively revamping our technologies with the most modern one since the first day of our journey.All the aged machineries are being regularly replaced with the latest one. Technical team members are maintaining the machineries actively so that these can provide the best outcome."
      />
      <div
        data-aos="zoom-in"
        className="container mx-auto grid grid-cols-8 grid-rows-8 gap-4 my-10 px-5"
      >
        <div className="rounded overflow-hidden shadow-md col-span-4 row-span-4">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded overflow-hidden shadow-md col-span-4 row-span-4 col-end-9 row-end-9">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded overflow-hidden shadow-md col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/0r9cG8r/pexels-photo-247786.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
