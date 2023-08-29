import { BiRightArrowAlt } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className=" container flex items-center mx-auto h-[80vh]">
      <div className=" w-1/3 mx-auto">
        <h2 className=" text-3xl font-semibold mb-10 text-secondary">SignUp</h2>
        <div className=" flex flex-col gap-5">
          {/* this is fot patient register div  */}
          <Link to='/patient-register'>
            <div className=" bg-slate-100 p-5 hover:border-secondary duration-300 border-2 rounded flex items-center justify-between hover:bg-slate-50 group">
              <div className=" flex items-center gap-5">
                <FaUserDoctor size={40} color="#0e82fd" />
                <div>
                  <h2 className=" text-xl text-primary font-medium">Patient</h2>
                  <p className=" text-gray-700">Register for Patient</p>
                </div>
              </div>
              <div className=" bg-white p-3 rounded-full text-2xl group-hover:bg-secondary duration-500 group-hover:text-white">
                <BiRightArrowAlt />
              </div>
            </div>
          </Link>
          {/* this is fot doctor register div  */}
          <Link to='/doctor-register'>
            <div className=" bg-slate-100 p-5 hover:border-secondary duration-300 border-2 rounded flex items-center justify-between hover:bg-slate-50 group">
              <div className=" flex items-center gap-5">
                <FaUserDoctor size={40} color="#0e82fd" />
                <div>
                  <h2 className=" text-xl text-primary font-medium">Doctor</h2>
                  <p className=" text-gray-700">Register for Doctor</p>
                </div>
              </div>
              <div className=" bg-white p-3 rounded-full text-2xl group-hover:bg-secondary duration-500 group-hover:text-white">
                <BiRightArrowAlt />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
