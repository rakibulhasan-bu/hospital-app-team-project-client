import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MobileMenu from "./MobileMenu";

interface NavLink {
  path: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

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
      <nav className=" flex justify-between items-center container mx-auto h-24 px-4 relative">
        <div>
          <Link to="/">
            <img src={logo} className=" h-14" alt="logo" />
          </Link>
        </div>
        <div className=" hidden lg:block">
          <ul className="flex justify-between items-center gap-10">
            {navlinks.map((link) => (
              <li key={link.path} className=" relative">
                <NavLink
                  className="  text-textBlack font-bold hover:font-bold hover:text-secondary duration-500 nav-link"
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:block">
          <button className=" bg-secondary rounded-full px-6 py-3 font-semibold text-textBlack">
            Login
          </button>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <GrClose size={27} color="secondary" />
          ) : (
            <BiMenuAltRight size={35} color="secondary" />
          )}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open
              ? "left-0 top-20 md:-left-[22px]"
              : "-left-[190px] top-20 bottom-0 md:-left-[220px]"
          }`}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
