import React from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

interface NavLink {
  path: string;
  title: string;
}

const Navbar: React.FC = () => {
  const navlinks: NavLink[] = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/aboutUs",
      title: "About Us",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/doctors",
      title: "Doctors",
    },
    {
      path: "/gallery",
      title: "Gallery",
    },
    {
      path: "/branches",
      title: "Branches",
    },
    {
      path: "/pharmacy",
      title: "Pharmacy",
    },
    {
      path: "/newsMedia",
      title: "News & Media",
    },
    {
      path: "/contactUs",
      title: "Contact Us",
    },
  ];

  return (
    <header className="">
      <nav className=" flex justify-between items-center container mx-auto h-24">
        <div>
          <Link to="/">
            <img src={logo} className=" h-14" alt="logo" />
          </Link>
        </div>
        <div className=" hidden lg:block">
          <ul className="flex justify-between items-center gap-10">
            {navlinks.map((link) => (
              <li
                key={link.path}
                className="  text-textBlack font-medium hover:font-bold hover:text-secondary duration-300"
              >
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:block">
          <button className=" bg-secondary rounded-full px-6 py-3 font-semibold text-textBlack">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
