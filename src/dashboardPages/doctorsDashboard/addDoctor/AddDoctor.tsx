const AddDoctor = () => {
  return (
    <section className="container mx-auto">
      <p>Doctors | Add Doctor </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Doctor Details
        </h2>
        <form action="">
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
            <div className=" flex-col flex lg:col-start-1 lg:col-end-3">
              <label className="">
                <span className="text">First Name</span>
              </label>
              <input
                type="email"
                placeholder="Your First Name"
                className="myInput"
              />
            </div>
            <div className=" flex-col flex lg:col-start-3 lg:col-end-5">
              <label className="">
                <span className="text">Last Name</span>
              </label>
              <input
                type="email"
                placeholder="Your Last Name"
                className="myInput"
              />
            </div>
            <div className=" flex-col flex">
              <label className="">
                <span className="text">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="myInput"
              />
            </div>
            <div className=" flex-col flex">
              <label className="">
                <span className="text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="myInput"
              />
            </div>
            <div className=" flex-col flex">
              <label className="">
                <span className="text">Designation</span>
              </label>
              <input
                type="text"
                placeholder="Your Designation"
                className="myInput"
              />
            </div>
            <div className=" flex-col flex">
              <label className="">
                <span className="text">Department</span>
              </label>
              <select className="myInput text bg-white">
                <option disabled selected>
                  Select Department
                </option>
                <option>Orthopedics</option>
                <option>Radiology</option>
                <option>Dentist</option>
              </select>
            </div>
            <div className="flex-col flex">
              <label className="">
                <span className="text">Avatar</span>
              </label>
              <input type="file" className="myInput text bg-white" />
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input className="myInput peer" placeholder=" " />
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-indigo-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                {" "}
                Input Indigo{" "}
              </label>
            </div>
            <div className=" flex justify-between items-center">
              <button>Submit</button>
              <button className="">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
