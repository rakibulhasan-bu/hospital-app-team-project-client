import PrivateRoute from "../routes/PrivetRoutes";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import DashboardContextProvider from "./dashboardContext/DashboardContext";
import DashboardMain from "./dashboardMain/DashboardMain";

const DashboardLayout = () => {
    return (
        <PrivateRoute>
            <DashboardContextProvider>
                <div className='w-screen  h-screen overscroll-auto dashboard-bg'>
                    <AdminNavbar />
                    <DashboardMain />
                </div>
            </DashboardContextProvider>
        </PrivateRoute>
    );
};

export default DashboardLayout;