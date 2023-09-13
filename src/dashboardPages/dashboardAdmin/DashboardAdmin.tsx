import { BiCalendar } from "react-icons/bi";
import { BsPersonAdd, BsWallet } from "react-icons/bs";
import { PiScissorsLight } from "react-icons/pi";

const DashboardAdmin = () => {
  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">
        Doctors | Admin Dashboard{" "}
      </p>
      <div className=" rounded-2xl">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="flex flex-col relative lg:col-start-1 lg:col-end-5 bg-secondary text-white py-12 pl-6 rounded-2xl">
            <h1 className=" text-3xl font-semibold">
              Wellcome <span className=" text-primary">user</span>
            </h1>
            <p className=" font-medium text-gray-400">Have a nice day</p>
          </div>
          <div className=" flex-col flex w-full  lg:col-start-1 lg:col-end-2 bg-white p-6 rounded-2xl">
            <div className=" bg-gray-200 border-2 mb-4 border-blue-200 rounded-2xl w-12 h-12 flex items-center  justify-center text-primary">
              <BiCalendar size={30} />
            </div>
            <h2 className=" font-semibold mb-6">Appointments</h2>
            <p className=" text-3xl font-semibold text-primary mb-5">250</p>
            <p className="font-medium text-primary">
              <span className=" text-green-400">15%</span> Increased
            </p>
          </div>
          <div className=" flex-col flex relative w-full  lg:col-start-2 lg:col-end-3 bg-white p-6 rounded-2xl">
            <div className=" bg-gray-200 border-2 mb-4 border-blue-200 rounded-2xl w-12 h-12 flex items-center  justify-center text-primary">
              <BsPersonAdd size={30} />
            </div>
            <h2 className=" font-semibold mb-6">New Patients</h2>
            <p className=" text-3xl font-semibold text-primary mb-5">140</p>
            <p className="font-medium text-primary">
              <span className=" text-green-400">15%</span> Increase
            </p>
          </div>

          <div className=" flex-col flex relative w-full  lg:col-start-3 lg:col-end-4 bg-white p-6 rounded-2xl">
            <div className=" bg-gray-200 border-2 mb-4 border-blue-200 rounded-2xl w-12 h-12 flex items-center  justify-center text-primary">
              <PiScissorsLight size={30} />
            </div>
            <h2 className=" font-semibold mb-6">Operations</h2>
            <p className=" text-3xl font-semibold text-primary mb-5">50</p>
            <p className="font-medium text-primary">
              <span className=" text-red-400">15%</span> decrease
            </p>
          </div>
          <div className=" flex-col flex relative w-full  lg:col-end-5 lg:col-start-4 bg-white p-6 rounded-2xl">
            <div className=" bg-gray-200 border-2 mb-4 border-blue-200 rounded-2xl w-12 h-12 flex items-center  justify-center text-primary">
              <BsWallet size={30} />
            </div>
            <h2 className=" font-semibold mb-6">Earnings</h2>
            <p className=" text-3xl font-semibold text-primary mb-5">$23350</p>
            <p className="font-medium text-primary">
              <span className=" text-red-400">15%</span> decrease
            </p>
          </div>
          <div className=" flex-col flex w-full  lg:col-start-1 lg:col-end-4 bg-white p-6 rounded-2xl">
            <div className=" flex justify-between items-center">
              <h2>Patient Visit by Gender</h2>
              <p className=" flex items-center gap-2">
                <div className=" w-2 h-2 rounded-full bg-secondary"></div>{" "}
                <span>Male 20%</span>
                <div className=" w-2 h-2 rounded-full bg-primary"></div>{" "}
                <span>Female 40%</span>
              </p>
              <div>
                <select className="border shadow-sm rounded-lg h-10 text bg-white outline-secondary font-semibold text-gray-400">
                  {/* <option disabled selected>
                    Select Department
                  </option> */}
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex w-full  text-left items-center lg:col-end-5 lg:col-start-4 bg-white p-6">
            fghfgh
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
