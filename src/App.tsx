import AppointmentFooter from "./pages/shared/appointmentFooter/AppointmentFooter";
import Footer from "./pages/shared/footer/Footer";
import Navbar from "./pages/shared/navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

const App = () => {
  const { theme } = useSelector((state: RootState) => state.themeState);
  return (
    <div className={`${theme} bg-background`}>
      <Navbar />
      <Outlet />
      <Footer />
      <AppointmentFooter />
      <ScrollRestoration />
    </div>
  );
};

export default App;
