import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MobileMenu from "./MobileMenu";
import DarkToggle from "./DarkToggle";
import LanguageNav from "./LanguageNav";

interface NavLink {
  path: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const UserLoggedIn: boolean = false;

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
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="container relative flex items-center justify-between px-4 mx-auto 2xl:h-24 lg:py-2">
        <div>
          <Link to="/">
            <img src={logo} className=" h-14" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col items-center justify-between gap-6 2xl:gap-10 md:flex-row">
            {navlinks.map((link) => (
              <li key={link.path} className="relative ">
                <NavLink
                  className="font-bold duration-500 text-textBlack hover:font-bold hover:text-secondary nav-link"
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          {UserLoggedIn ? (
            <button className="bttn common-btn text-textBlack">Login</button>
          ) : (
            <Link to="/register" className="bttn common-btn text-textBlack">
              Register
            </Link>
          )}
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <GrClose size={27} color="secondary" />
          ) : (
            <BiMenuAltRight size={35} color="secondary" />
          )}
        </div>
        <div
          className={` absolute duration-300 ease-out ${open
              ? "left-0 top-[56px] md:-left-[30px]"
              : "-left-[220px] top-[56px] bottom-0 md:-left-[220px]"
            }`}
        >
          <MobileMenu />
        </div>
        <DarkToggle />
        <LanguageNav />
      </nav>
    </header>
  );
};

export default Navbar;
