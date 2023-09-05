import { Link } from "react-router-dom";
import design from "../../assets/login-02.png";
import logo from "../../assets/logo.png";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <section className="bg-background w-full h-[82dvh] grid grid-cols-1 md:grid-cols-2">
      {/* these is image section  */}
      <div className="bg-secondary w-full h-full rounded-r-[50px] hidden lg:block 2xl:block">
        <img className="w-full h-full object-contain" src={design} alt="" />
      </div>
      {/* these is form section  */}
      <div className="self-center mx-20 bg-white rounded-3xl p-10 space-y-5">
        <img className=" h-16 hidden lg:block" src={logo} alt="" />
        <h2 className=" title text-2xl">Getting Started</h2>
        <form className=" space-y-5">
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

          <div className="flex items-center justify-between mt-6">
            <button className=" bttn common-btn w-full">LogIn</button>
          </div>
        </form>
        <div className=" flex justify-between items-center">
          <p className=" text-gray-400 font-semibold">
            Need an account?
            <Link className=" text-secondary ml-2" to="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
