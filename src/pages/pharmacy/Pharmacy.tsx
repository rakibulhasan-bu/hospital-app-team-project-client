import {
  FaMedkit,
  FaHospital,
  FaVideo,
  FaVial,
  FaArrowRight,
} from "react-icons/fa";
import ProductSlider from "./slider/ProductSlider";
import MedicinePromotion from "./promotionCard/MedicinePromotion";
import BlogSlider from "./blogSlider/BlogSlider";

const Pharmacy = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <div className="relative w-full h-56">
        <img
          src="https://i.ibb.co/1v8L3QT/glass-water-pills-desk.jpg"
          alt="E-commerce Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our Online Pharmacy!
          </h1>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for medicine..."
              className="px-4 py-2 border rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-around mt-12 flex-wrap">
        <div className="bg-gray-100 border p-4 h-20 w-1/4 flex items-center justify-between rounded-md overflow-hidden">
          <div>
            <FaMedkit className="text-3xl text-blue-500 " />
          </div>
          <div className="w-full text-left ms-8">
            <h3 className="text-md font-bold text-secondary ">
              {" "}
              Get 15% off on <br /> Medicines
            </h3>
            <p className="text-sm text-textBlack">Upload</p>
          </div>
          <div>
            <FaArrowRight className="text-xl text-green-500" />
          </div>
        </div>
        <div className="bg-gray-200 border p-4 h-20 w-1/4 flex items-center justify-between rounded-md overflow-hidden">
          <div>
            <FaHospital className="text-3xl text-red-500 " />
          </div>
          <div className="w-full text-left ms-8">
            <h3 className="text-md font-bold text-secondary ">
              {" "}
              Hospital Visit
            </h3>
            <p className="text-sm text-textBlack">Pre-book</p>
          </div>
          <div>
            <FaArrowRight className="text-xl text-green-500" />
          </div>
        </div>
        <div className="bg-gray-300 border p-4 h-20 w-1/4 flex items-center justify-between rounded-md overflow-hidden">
          <div>
            <FaVideo className="text-3xl text-purple-500 " />
          </div>
          <div className="w-full text-left ms-8">
            <h3 className="text-md font-bold text-secondary ">
              {" "}
              Video Consult
            </h3>
            <p className="text-sm text-textBlack">In 15 min</p>
          </div>
          <div>
            <FaArrowRight className="text-xl text-green-500" />
          </div>
        </div>
        <div className="bg-gray-400 border p-4 h-20 w-1/4 flex items-center justify-between rounded-md overflow-hidden">
          <div>
            <FaVial className="text-3xl text-yellow-500 " />
          </div>
          <div className="w-full text-left ms-8">
            <h3 className="text-md font-bold text-secondary "> Lab Tests</h3>
            <p className="text-sm text-textBlack">At home</p>
          </div>
          <div>
            <FaArrowRight className="text-xl text-green-500" />
          </div>
        </div>
      </div>

      <ProductSlider></ProductSlider>
      <ProductSlider></ProductSlider>

      {/* <AdSlider></AdSlider> */}
      <MedicinePromotion></MedicinePromotion>
      <BlogSlider></BlogSlider>
    </div>
  );
};

export default Pharmacy;
