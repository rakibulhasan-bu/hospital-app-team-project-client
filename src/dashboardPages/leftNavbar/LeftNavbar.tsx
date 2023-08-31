import { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi";


const LeftNavbar = () => {
    const [dashboardOpen, setDashboardOpen] = useState<boolean>(false);
    const [newsOpen, setNewsOpen] = useState<boolean>(false);

    const handleDashboard = () => {
        setDashboardOpen(prev => (!prev))
    }
    const handleNews = () => {
        setNewsOpen(prev => (!prev))
    }

    const navLinks = [
        {
            label: "Dashboard",
            handler: handleDashboard,
            state: dashboardOpen,
            icon: <BiSolidDashboard className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />
        },
        {
            label: "News & Article",
            handler: handleNews,
            state: newsOpen,
            icon: <HiOutlineNewspaper className="text-lg text-primary/60 cursor-pointer group-hover:text-primary" />
        },

    ];
    return (
        <div className='h-[90.2dvh] overflow-y-auto bg-red-300 pt-4'>
            <div className='bg-white px-4 py-4 space-y-4 h-full rounded-tr-3xl'>
                {
                    navLinks.map(singleLink => (
                        <div onClick={singleLink?.handler} className='flex items-center justify-between group cursor-pointer'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-primary/10 p-1 rounded'>
                                    {singleLink?.icon}
                                </div>
                                <p className="font-medium text-primary/50 group-hover:text-primary">{singleLink?.label}</p>
                            </div>
                            <IoIosArrowForward className={`text-lg font-medium text-primary/50 group-hover:text-primary ${singleLink?.state ? "rotate-90 transition-all duration-300" : " transition-all duration-300"}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;