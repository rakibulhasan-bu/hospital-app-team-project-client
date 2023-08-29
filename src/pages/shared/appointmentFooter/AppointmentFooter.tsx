import React from "react";
import { FaUserMd, FaGift, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentFooter: React.FC = () => {
  return (
<section className="fixed bottom-0 left-0 right-0 flex flex-wrap justify-around items-center gap-4 p-4 bg-secondary shadow-t sm:shadow-md z-50">
  <div className="flex items-center text-white text-sm transition-colors duration-300 hover:text-black">
    <FaCalendarAlt className="mr-2" />
    <Link to="/appointment">Book Appointment</Link>
  </div>
  <div className="flex items-center text-white text-sm transition-colors duration-300 hover:text-black">
    <FaUserMd className="mr-2" />
    <Link to="/doctors">Find a Doctor</Link>
  </div>
  <div className="flex items-center text-white text-sm transition-colors duration-300 hover:text-black">
    <FaGift className="mr-2" />
    <Link to="/packages">Packages</Link>
  </div>
</section>

  );
};

export default AppointmentFooter;
