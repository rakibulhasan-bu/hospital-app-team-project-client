import { useState, useContext } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import { DashboardContext } from "../dashboardContext/DashboardContext";


const LeftNavbar = () => {
    const { close, setClose } = useContext(DashboardContext)
    const location = useLocation();
    const isActive = (path: string) => {
        return location.pathname === path;
    };
    const [newsOpen, setNewsOpen] = useState<boolean>(false);
    const [appointmentOpen, setAppointmentOpen] = useState<boolean>(false);

    const handleClose = () => {
        if (!close) {
            setClose(true)
        }
    }
    const handleNews = () => {
        setNewsOpen(prev => (!prev))
    }
    const handleAppointment = () => {
        setAppointmentOpen(prev => (!prev))
    }

    const navLinks = [
        {
            label: "Dashboard",
            icon: <BiSolidDashboard className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />
        },
        {
            label: "News & blog",
            handler: handleNews,
            state: newsOpen,
            icon: <HiOutlineNewspaper className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />,
            children: [
                {
                    label: "News & blog List",
                    link: "/dashboard",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },
                {
                    label: "News & blog List",
                    link: "/dashboard",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },

            ]
        },
        {
            label: "Appointments",
            handler: handleAppointment,
            state: appointmentOpen,
            icon: <LuCalendarDays className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />,
            children: [
                {
                    label: "News & blog List",
                    link: "/dashboard",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },
                {
                    label: "News & blog List",
                    link: "/dashboard/dashboard-setting",
                    icon: <HiOutlineNewspaper className={`cursor-pointer group-hover:text-primary ${isActive("/dashboard/dashboard-setting") ? 'text-primary' : 'text-primary/60'}`} />,
                },

            ]
        },

    ];

    return (
        <div onClick={handleClose} className={`h-[87dvh] overflow-y-auto bg-white py-4 space-y-4 rounded-tr-3xl myShadow w-full ${close ? "px-4" : "pl-2.5"}`}>
            {
                navLinks.map(singleLink => (
                    <div className=''>
                        <div onClick={singleLink?.handler} className='flex items-center justify-between group cursor-pointer'>
                            <div className={`flex items-center ${close ? "gap-4" : ""}`}>
                                <div className='bg-primary/10 p-1 rounded'>
                                    {singleLink?.icon}
                                </div>
                                <p className="font-medium text-primary/50 select-none group-hover:text-primary">{close && singleLink?.label}</p>
                            </div>
                            {
                                singleLink?.children && close && <IoIosArrowForward className={`text-lg font-medium text-primary/50 group-hover:text-primary ${singleLink?.state ? "rotate-90 transition-all duration-300" : " transition-all duration-300"}`} />
                            }
                        </div>
                        {
                            singleLink?.children && singleLink?.state && (
                                singleLink?.children.map(singleChildren => (
                                    <NavLink to={singleChildren?.link}>
                                        <div className='flex items-center gap-4 pt-2 pl-2 group cursor-pointer'>
                                            <div className='bg-primary/10 p-1 rounded'>
                                                {singleChildren?.icon}
                                            </div>
                                            <p className={`font-medium text-sm select-none group-hover:text-primary ${isActive(singleChildren?.link) ? 'text-primary' : 'text-primary/50'}`}>{close && singleChildren?.label}</p>
                                        </div>
                                    </NavLink>
                                ))
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default LeftNavbar;