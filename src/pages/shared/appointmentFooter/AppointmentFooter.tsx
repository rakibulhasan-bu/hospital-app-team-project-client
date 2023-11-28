import React from "react";
import { FaUserMd, FaGift, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentFooter: React.FC = () => {
  return (
    <section className=" bg-secondary w-full fixed bottom-0 left-0 right-0 z-50">
      <div className=" flex justify-around items-center  container mx-auto">
        <Link
          to="/appointment"
          className="flex items-center justify-center cursor-pointer w-full text-white  bg-secondary hover:bg-blue-700 px-1 lg:px-4 py-2 2xl:py-4 text-[10px] lg:text-sm transition-colors duration-300 hover:font-semibold"
        >
          <FaCalendarAlt className="mr-2" />
          <span className="hidden lg:block">Book Appointment</span>
          <span className="lg:hidden">Appointment</span>
        </Link>
        <Link
          to="/doctors"
          className="flex items-center justify-center cursor-pointer w-full text-white  bg-secondary hover:bg-blue-700 px-1 lg:px-4 py-2 2xl:py-4 text-[10px] lg:text-sm transition-colors duration-300 hover:font-semibold"
        >
          <FaUserMd className="mr-2" />
          Find a Doctor
        </Link>
        <Link
          to="/packages"
          className="flex items-center justify-center cursor-pointer w-full text-white  bg-secondary hover:bg-blue-700 px-1 lg:px-4 py-2 2xl:py-4 text-[10px] lg:text-sm transition-colors duration-300 hover:font-semibold"
        >
          <FaGift className="mr-2" />
          Packages
        </Link>
      </div>
    </section>
  );
};

export default AppointmentFooter;
