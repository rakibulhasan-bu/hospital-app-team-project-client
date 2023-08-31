import { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [newsOpen, setNewsOpen] = useState<boolean>(false);
    const [appointmentOpen, setAppointmentOpen] = useState<boolean>(false);

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
                    link: "/dashboard/dashboard-setting",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },
                {
                    label: "News & blog List",
                    link: "/dashboard/dashboard-setting",
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
                    link: "/dashboard/dashboard-setting",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },
                {
                    label: "News & blog List",
                    link: "/dashboard/dashboard-setting",
                    icon: <HiOutlineNewspaper className="text-primary/60 cursor-pointer group-hover:text-primary" />,
                },

            ]
        },

    ];
    return (
        <div className='h-[87dvh] overflow-y-auto bg-white px-4 py-4 space-y-4 rounded-tr-3xl myShadow'>
            {
                navLinks.map(singleLink => (
                    <div className=''>
                        <div onClick={singleLink?.handler} className='flex items-center justify-between group cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-primary/10 p-1 rounded'>
                                    {singleLink?.icon}
                                </div>
                                <p className="font-medium text-primary/50 select-none group-hover:text-primary">{singleLink?.label}</p>
                            </div>
                            {
                                singleLink?.children && <IoIosArrowForward className={`text-lg font-medium text-primary/50 group-hover:text-primary ${singleLink?.state ? "rotate-90 transition-all duration-300" : " transition-all duration-300"}`} />
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
                                            <p className="font-medium text-sm text-primary/50 select-none group-hover:text-primary">{singleChildren?.label}</p>
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