import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/errorpage/ErrorPage";
import DashboardLayout from "../dashboardPages/DashboardLayout";
import Home from "../pages/home/Home";
import Doctors from "../pages/doctors/Doctors";
import NewsMedia from "../pages/newsMedia/NewsMedia";
import Gallery from "../pages/gallery/Gallery";
import AboutUs from "../pages/aboutUs/AboutUs";
import Branches from "../pages/branches/Branches";
import ContactUs from "../pages/contactUs/ContactUs";
import Pharmacy from "../pages/pharmacy/Pharmacy";
import Services from "../pages/services/Services";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "newsMedia",
        element: <NewsMedia />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "branches",
        element: <Branches />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "pharmacy",
        element: <Pharmacy />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: []
  },
]);
