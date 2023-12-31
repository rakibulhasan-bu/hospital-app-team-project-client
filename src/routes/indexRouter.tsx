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
import PatientRegister from "../pages/patientRegister/PatientRegister";
import DoctorRegister from "../pages/doctorRegister/DoctorRegister";
import DashboardSetting from "../dashboardPages/dashboardSetting/DashboardSetting";
import AddNews from "../dashboardPages/dashboradNewsAll/addNews/AddNews";
import AddNewsCategory from "../dashboardPages/dashboradNewsAll/addNewsCategory/AddNewsCategory";
import DashboardAdmin from "../dashboardPages/dashboardAdmin/DashboardAdmin";
import DashboardDoctors from "../dashboardPages/dashboardContext/DashboardDoctors";
import DoctorsList from "../dashboardPages/doctorsDashboard/doctorList/DoctorsList";
import PatientList from "../dashboardPages/patiendDashboard/PatientList";
import AppointmentsList from "../dashboardPages/appointmentsList/AppointmentsList";
import DashboardNewsList from "../dashboardPages/dashboradNewsAll/DashboardNewsList";
import Appointment from "../pages/appointment/Appointment/Appointment";
import AddDoctor from "../dashboardPages/doctorsDashboard/addDoctor/AddDoctor";
import AddBranch from "../dashboardPages/dashboardBrances/addBranch/AddBranch";
import BranchList from "../dashboardPages/dashboardBrances/branchList/BranchList";
import PrivateRoute from "./PrivetRoutes";
import DashboardProductList from "../dashboardPages/dashboardPharmacy/ProductList";
import AddProduct from "../dashboardPages/dashboardPharmacy/addProduct/AddProduct";
import DashboardUsers from "../dashboardPages/dashboardUsers/DashboardUsers";
import EditDoctor from "../dashboardPages/doctorsDashboard/editDoctor/EditDoctor";
import EditBranch from "../dashboardPages/dashboardBrances/editBranch/EditBranch";
import EditProduct from "../dashboardPages/dashboardPharmacy/editProduct/EditProduct";
import NewsDetails from "../pages/newsMedia/NewsDetails/NewsDetails";

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
        path: "patient-register",
        element: <PatientRegister />,
      },
      {
        path: "doctor-register",
        element: <DoctorRegister />,
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
        path: "newsMedia/:id",
        element: <NewsDetails />,
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
      {
        path: "appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/dashboard-setting",
        element: <DashboardSetting />,
      },
      {
        path: "/dashboard/admin-dashboard",
        element: <DashboardAdmin />,
      },
      {
        path: "/dashboard/doctor-dashboard",
        element: <DashboardDoctors />,
      },
      {
        path: "/dashboard/users",
        element: <DashboardUsers />,
      },
      {
        path: "/dashboard/doctors-list",
        element: <DoctorsList />,
      },
      {
        path: "/dashboard/add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "/dashboard/edit-doctor/:id",
        element: <EditDoctor />,
      },
      {
        path: "/dashboard/patients-list",
        element: <PatientList />,
      },
      {
        path: "/dashboard/appointments-list",
        element: <AppointmentsList />,
      },
      {
        path: "/dashboard/news-list",
        element: <DashboardNewsList />,
      },
      {
        path: "/dashboard/add-news",
        element: <AddNews />,
      },
      {
        path: "/dashboard/product-list",
        element: <DashboardProductList />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <EditProduct />,
      },
      {
        path: "/dashboard/add-news-category",
        element: <AddNewsCategory />,
      },
      {
        path: "/dashboard/add-branch",
        element: <AddBranch />,
      },
      {
        path: "/dashboard/edit-branch/:id",
        element: <EditBranch />,
      },
      {
        path: "/dashboard/branches-list",
        element: <BranchList />,
      },
    ],
  },
]);
