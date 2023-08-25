import Footer from "./pages/shared/footer/Footer";
import Navbar from "./pages/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;