import AdminNavbar from "./adminNavbar/AdminNavbar";
import DashboardContextProvider from "./dashboardContext/DashboardContext";
import DashboardMain from "./dashboardMain/DashboardMain";

const DashboardLayout = () => {
    return (
        <DashboardContextProvider>
            <div className='w-screen  h-screen overscroll-auto dashboard-bg'>
                <AdminNavbar />
                <DashboardMain />
            </div>
        </DashboardContextProvider>
    );
};

export default DashboardLayout;