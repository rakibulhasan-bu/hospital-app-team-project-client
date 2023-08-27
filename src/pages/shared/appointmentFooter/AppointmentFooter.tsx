import React from "react";
import { FaUserMd, FaGift, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center h-12 p-4 bg-secondary justify-evenly shadow-t sm:shadow-md">
      <Link to="/appointment" className="flex items-center text-white hover:text-black">
        <FaCalendarAlt className="mr-1 text-xl" />
        Book Appointment
      </Link>
      <div className="w-px h-12 mx-4 bg-white"></div>
      <Link to="/doctors" className="flex items-center text-white hover:text-black">
        <FaUserMd className="mr-1 text-xl" />
        Find a Doctor
      </Link>
      <div className="w-px h-12 mx-4 bg-white"></div>
      <Link to="/packages" className="flex items-center text-white hover:text-black">
        <FaGift className="mr-1 text-xl" />
        Packages
      </Link>
    </div>
  );
};

export default AppointmentFooter;
