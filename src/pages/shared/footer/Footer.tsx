import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/yourhospital", icon: <FaFacebook /> },
    { name: "Twitter", url: "https://twitter.com/yourhospital", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com/yourhospital", icon: <FaInstagram /> },
  ];

  return (
    <footer className="text-primary font-medium mt-40 mb-10 relative px-2">
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-t from-gray-200 to-transparent"></div>
      <div className="shadow-t sm:shadow-md py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <img src={logo} alt="Hospital Logo" className="h-16" />
              <p className="mt-4 text-textBlack">
                To serve the humanity as a whole with this noble vision, Lifecare Hospital started its journey in 2023.
              </p>
              <div className="mt-4 flex items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary mr-4 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/emergency-care">Emergency Care</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/specialized-treatments">Specialized Treatments</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/diagnostic-services">Diagnostic Services</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">For Doctors</h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/appointments">Appointments</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/login">Login</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/register">Register</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link to="/doctor-dashboard">Doctor Dashboard</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul>
                <li className="mb-2 flex items-center text-textBlack">
                  <FaMapMarkerAlt className="mr-2 hover:text-secondary transition-colors duration-300" />
                  123 Hospital Street, City, Country
                </li>
                <li className="mb-2 flex items-center text-textBlack">
                  <FaEnvelope className="mr-2 hover:text-secondary transition-colors duration-300" />
                  Email: info@hospital.com
                </li>
                <li className="mb-2 flex items-center text-textBlack">
                  <FaPhone className="mr-2 hover:text-secondary transition-colors duration-300" />
                  Phone: +123 456 7890
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <hr />
            <p className="text-textBlack mt-5">&copy; 2023 Lifecare Hospital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
