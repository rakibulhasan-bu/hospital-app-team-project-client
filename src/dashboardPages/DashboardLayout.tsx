import { Outlet } from "react-router-dom";
import LeftNavbar from "./leftNavbar/LeftNavbar";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import { useState } from "react";

const DashboardLayout = () => {
    const [close, setClose] = useState<boolean>(true);
    return (
        <div className='w-screen h-screen overscroll-auto dashboard-bg'>
            <AdminNavbar close={close} setClose={setClose} />
            <div className='flex'>
                <div className={`${close ? "w-1/6 transition-all duration-300" : "w-12 transition-all duration-300"} pt-5`}>
                    <LeftNavbar close={close} setClose={setClose} />
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;