import { useContext } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Notifications from "../notifications/Notifications";
import { DashboardContext } from "../dashboardContext/DashboardContext";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AdminNavbar = () => {
    const { open, setOpen, close, setClose, handleClose } = useContext(DashboardContext);
    const { user } = useSelector((state: RootState) => state.userState)

    console.log(user);
    return (
        <div className='bg-white py-2 px-4 w-full flex items-center justify-between myShadow'>
            <div className={`flex items-center ${close ? "gap-10" : "gap-4"}`}>
                <Link to='/'>
                    <div className='flex items-center gap-2'>
                        <img className="h-10 w-10 object-cover" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693413583/Website-assets/LifeCare/lifecare_logo_ktasdt_yczkkh.png" alt="This is logo image" />
                        {close &&
                            <h3 className="font-bold text-2xl text-secondary select-none">Lifecare</h3>
                        }
                    </div>
                </Link>
                {
                    close ?
                        <RiMenuFoldLine onClick={handleClose} className="text-2xl text-primary/90 hover:text-primary cursor-pointer" /> :
                        <RiMenuUnfoldLine onClick={() => setClose(prev => (!prev))} className="text-2xl text-primary/90 hover:text-primary cursor-pointer" />
                }

            </div>
            {/* this is name and role img and setting div  */}
            <div className='flex items-center gap-8'>
                <div className='relative'>
                    <MdNotifications onClick={() => setOpen(prev => (!prev))} className="text-3xl text-primary/60 cursor-pointer hover:text-primary" />
                    {open && <Notifications />}
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>
                        <h3 className="text-primary font-semibold">{user?.name}</h3>
                        <p className="text-primary/50 text-sm">Admin</p>
                    </div>
                    <img className="w-10 h-10 object-cover rounded-lg" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693057174/Website-assets/LifeCare/pexels-polina-tankilevitch-3873191_sobg4q.jpg" alt="" />
                </div>
                <Link to="/dashboard/dashboard-setting">
                    <IoMdSettings className="text-3xl text-primary/60 cursor-pointer hover:text-primary" />
                </Link>
            </div>
        </div>
    );
};

export default AdminNavbar;