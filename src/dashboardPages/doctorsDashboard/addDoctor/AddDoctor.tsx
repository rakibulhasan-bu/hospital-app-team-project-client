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
                            <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray"> Email*</label>
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
