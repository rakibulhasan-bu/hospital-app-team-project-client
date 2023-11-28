import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MobileMenu from "./MobileMenu";
import DarkToggle from "./darkToggle/DarkToggle";
import LanguageNav from "./LanguageNav";
import DivisionList from "../../../components/Banches/DivisionList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { userLogOut } from "../../../redux/features/user/userSlice";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

interface NavLink {
  path: string;
  title: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const { name, email, imageUrl } = useSelector(
    (state: RootState) => state.userState
  );
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    signOut(auth);
    dispatch(userLogOut());
  };
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
  ];
  const jsonData = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Manikganj"],
    Chittagong: ["Chattogram", "Cox's Bazar", "Feni", "Comilla", "Noakhali"],
    Khulna: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Magura"],
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-background">
      <nav className="container relative flex items-center justify-between px-2 lg:px-0 mx-auto 2xl:h-24 lg:py-1.5 2xl:py-2">
        <div>
          <Link to="/">
            <img src={logo} className="object-cover h-12 2xl:h-14" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col items-center justify-between gap-6 2xl:gap-10 md:flex-row">
            {navlinks.map((link) => (
              <li key={link.path} className="relative ">
                <NavLink
                  className="font-medium text-textBlack hover:text-secondary nav-link"
                  to={link.path}
                >
                  {link.title === "Branches" ? (
                    <div className="">
                      <div className="flex items-center justify-between cursor-pointer">
                        <h2 className="" onMouseOver={toggleAccordion}>
                          Branches
                        </h2>
                      </div>
                      {isOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/90">
                          <div
                            className="p-5 rounded-lg shadow-lg bg-accent/90  max-h-[70vh] overflow-y-scroll md:p-10 lg:px-20 lg:py-10 w-max"
                            onMouseLeave={toggleAccordion}
                          >
                            {/* <button><MdCancel className="absolute top-0 right-0 text-4xl text-accent"/></button> */}
                            <DivisionList data={jsonData} />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <h1>{link.title}</h1>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-between hidden gap-6 lg:flex 2xl:gap-10">
          <DarkToggle />
          <LanguageNav />
          {email ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={name}
                  size="sm"
                  src={imageUrl}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="gap-2 h-14">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{email}</p>
                </DropdownItem>
                <DropdownItem key="dashboard">
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogOut}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            // <img className="object-cover w-10 h-10 rounded-lg" src={imageUrl} alt="" />
            <Link to="/login" className="bttn common-btn text-textBlack">
              login
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
        {/* mobile menu  */}

        <div
          className={` absolute duration-300 ease-out ${
            open
              ? "left-0 top-[56px] md:-left-[30px]"
              : "-left-[220px] top-[56px] bottom-0 md:-left-[220px]"
          }`}
        >
          <MobileMenu setOpen={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
