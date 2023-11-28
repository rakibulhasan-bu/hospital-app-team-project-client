import { Link, NavLink } from "react-router-dom";

interface NavLink {
  path: string;
  title: string;
}

const MobileMenu: React.FC<{}> = ({ setOpen }) => {
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
    <div className=" bg-black w-full h-screen flex justify-start items-center">
      <div className="bg-secondary h-screen lg:hidden">
        <ul className="flex flex-col justify-between gap-5 px-10 pt-10">
          {navlinks.map((link) => (
            <li
              onClick={() => setOpen((prev) => !prev)}
              key={link.path}
              className="  text-white font-medium duration-300 text-left"
            >
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
