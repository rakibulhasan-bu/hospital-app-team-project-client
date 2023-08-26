import React from "react";
import { FaUserMd, FaGift, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary p-4 h-12 flex justify-evenly items-center shadow-t sm:shadow-md">
      <Link to="/appointment" className="flex items-center text-white hover:text-black">
        <FaCalendarAlt className="text-xl mr-1" />
        Book Appointment
      </Link>
      <div className="h-12 bg-white w-px mx-4"></div>
      <Link to="/doctors" className="flex items-center text-white hover:text-black">
        <FaUserMd className="text-xl mr-1" />
        Find a Doctor
      </Link>
      <div className="h-12 bg-white w-px mx-4"></div>
      <Link to="/packages" className="flex items-center text-white hover:text-black">
        <FaGift className="text-xl mr-1" />
        Packages
      </Link>
    </div>
  );
};

export default AppointmentFooter;
