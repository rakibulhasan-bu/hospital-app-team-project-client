import design from "../../assets/design.jpg";
const PatientRegister = () => {
  return (
    <section className=" container mx-auto 2xl:h-[80vh] 2xl:py-20 py-5">
      <div className=" lg:flex gap-2 bg-[#edf0ff] rounded-lg p-2 justify-between">
        <div
          className=" lg:w-3/5 2xl:w-3/5 flex-col justify-center flex rounded-xl"
          style={{
            backgroundImage: `url(${design})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover center",
            backgroundSize: "cover",
          }}
        >
          <div className=" lg:pl-20 p-4 space-y-3">
            <h2 className="text-2xl lg:text-4xl text-white font-bold">
              LifeCare <br /> medical hospital
            </h2>
            <div className=" space-y-3">
              <p className=" font-medium  text-textGray">Data Analytics</p>
              <p className=" font-medium  text-textGray">Data Analytics</p>
              <p className=" font-medium  text-textGray">Data Analytics</p>
              <p className=" font-medium  text-textGray">Data Analytics</p>
            </div>
          </div>
        </div>
        <form className=" space-y-5 lg:w-2/5 2xl:w-2/5 p-5">
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
              <span className="text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
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

          <div className="form-control mt-6">
            <button className=" bttn common-btn">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PatientRegister;
