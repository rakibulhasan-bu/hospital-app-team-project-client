const AddDoctor = () => {
  return (
    <section className="container mx-auto">
      <p>Doctors | Add Doctor </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Doctor Details
        </h2>
        <form action="">
          <div className=" grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="flex flex-col relative h-10 lg:col-start-1 lg:col-end-3">
              <input type="text" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Name*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Email*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Mobile*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-4">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Password*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-end-7 lg:col-start-4">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Confirm Password*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-4">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Date Of Birth*
              </label>
            </div>
            <div className=" flex relative w-full h-10 text-left items-center lg:col-end-7 lg:col-start-4">
              <label className="">Gender*</label>
              <div className=" flex gap-5 ">
                <input type="radio" name="radio-2" className="" checked />
                <input type="radio" name="radio-2" className="" />
              </div>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Education*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Designation*
              </label>
            </div>
            <div className=" flex-col flex lg:col-start-5 lg:col-end-7">
              <select className="border shadow-sm rounded-lg h-10 text bg-white outline-secondary font-semibold text-gray-400">
                <option disabled selected>
                  Select Department
                </option>
                <option>Orthopedics</option>
                <option>Radiology</option>
                <option>Dentist</option>
              </select>
            </div>
            <div className=" flex-col flex relative w-full h-20 lg:col-start-1 lg:col-end-7">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Address*
              </label>
            </div>
            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <input type="email" className="myInput peer" placeholder=" " />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Division*
              </label>
            </div>
            <div className="flex gap-4 items-center lg:col-start-3 lg:col-end-5">
              <div className="w-12 h-12 rounded-full shadow-lg border border-secondary">
                <img src="" alt="" />
              </div>
              <div className="">
                <label
                  htmlFor="image"
                  className="shadow-sm border text-textBlack px-4 py-2 rounded-lg cursor-pointer"
                >
                  Select Profile Picture
                </label>
                <input type="file" id="image" className="hidden" />
              </div>
            </div>

            <div className=" flex justify-end gap-5 items-center lg:col-start-5 lg:col-end-7">
              <button className=" bttn common-btn">Submit</button>
              <button className="btn plan-btn">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
