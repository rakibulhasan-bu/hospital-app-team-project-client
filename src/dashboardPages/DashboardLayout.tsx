import { useSelector } from "react-redux";
import AdminNavbar from "./adminNavbar/AdminNavbar";
import DashboardContextProvider from "./dashboardContext/DashboardContext";
import DashboardMain from "./dashboardMain/DashboardMain";
import { RootState } from "../redux/store";

const DashboardLayout = () => {
    const { theme } = useSelector((state: RootState) => state.themeState)
    return (
        <DashboardContextProvider>
            <div className={`${theme} w-screen h-screen overscroll-auto bg-DashboardBackground`}>
                <AdminNavbar />
                <DashboardMain />
            </div>
        </DashboardContextProvider>
    );
};

export default DashboardLayout;