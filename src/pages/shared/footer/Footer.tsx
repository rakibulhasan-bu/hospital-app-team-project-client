import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/yourhospital", icon: <FaFacebook /> },
    { name: "Twitter", url: "https://twitter.com/yourhospital", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com/yourhospital", icon: <FaInstagram /> },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="text-center lg:text-left">
            <img src={logo} alt="Hospital Logo" className="h-16" />
            <p className="mt-4">Providing quality healthcare services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.name} className="mb-2 flex items-center">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">Emergency Care</li>
              <li className="mb-2">Specialized Treatments</li>
              <li className="mb-2">Diagnostic Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Hospital Street</p>
            <p>City, Country</p>
            <p>Email: info@hospital.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Your Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
