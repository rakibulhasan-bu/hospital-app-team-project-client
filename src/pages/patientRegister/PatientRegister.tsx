import { Link } from "react-router-dom";
import design from "../../assets/login-02.png";
import logo from "../../assets/logo.png";
import { FaGoogle } from "react-icons/fa";
const PatientRegister = () => {
  return (
    <section className=" bg-[#edf0ff] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 lg:gap-20 2xl:pr-20 lg:pr-20 min-h-[70vh]">
      <div className=" bg-secondary rounded-r-[50px] hidden lg:block 2xl:block">
        <img src={design} alt="" />
      </div>
      <div className=" self-center bg-white rounded-3xl p-10 space-y-5">
        <img className=" h-16 hidden lg:block" src={logo} alt="" />
        <h2 className=" title text-2xl">Getting Started</h2>
        <form className=" space-y-5">
          <div className="flex flex-col">
            <label>
              <span className="text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className=" border border-gray-200 px-6 py-2 rounded outline-secondary"
            />
          </div>
          <div className=" flex-col flex">
            <label>
              <span className="text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className=" border border-gray-200 px-6 py-2 rounded outline-secondary"
            />
          </div>

          <div className="flex flex-col">
            <label>
              <span className="text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type password"
              className=" border border-gray-200 px-6 py-2 rounded outline-secondary"
            />
          </div>
          <div className=" flex-col flex">
            <label>
              <span className="text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className=" border border-gray-200 px-6 py-2 rounded outline-secondary"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className=" bttn common-btn w-full">Register</button>
          </div>
        </form>
        <div className=" flex justify-between items-center">
          <p className=" text-gray-400 font-semibold">
            Already have an account?
            <Link className=" text-secondary ml-2" to="/login">
              LogIn
            </Link>
          </p>
          <div className=" flex items-center gap-3 bg-secondary text-white p-1 group w-1/2 relative rounded">
            <span className=" bg-white p-2 text-red-500 group-hover:w-full duration-300">
              <FaGoogle />
            </span>
            <span className=" absolute group-hover:text-primary lg:top-[7px] lg:right-[7px]">
              Sign in with Google
            </span>
          </div>
          {/* <div className="relative group w-1/2 rounded overflow-hidden">
            <span className="flex items-center justify-center gap-2 bg-secondary text-white p-1 transition-all duration-300 transform translate-x-0 group-hover:translate-x-full">
              <FaGoogle className="text-red-500" />
              <span className="group-hover:text-primary">
                Sign in with Google
              </span>
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PatientRegister;
