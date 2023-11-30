import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { useAddDoctorMutation } from "../../../redux/features/doctor/doctorApi";

interface formInputs {
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  hospitalName: unknown;
  dob: unknown;
  qualifications: string;
  gender: string;
  fees: number;
  experience: number;
  education: string;
  department: string;
  division: string;
  district: string;
}

interface UpdateDoctorMutationResult {
  data: any;
  isSuccess: boolean;
  isError: boolean;
  error: { data: { message: string } };
  isLoading: boolean;
}

const AddDoctor = () => {
  const navigate = useNavigate();
  const [
    addDoctor,
    { data: doctorData, isSuccess, isError, error, isLoading },
  ] = useAddDoctorMutation<UpdateDoctorMutationResult>();

  const { register, handleSubmit } = useForm<formInputs>();

  // const fileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setLoadImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    addDoctor(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Doctor ${doctorData?.doctor?.name} added successfully`);
      navigate("/dashboard/doctors-list");
    }
    if (isError) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error, isError, isSuccess, navigate]);
  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">
        <Link to="/dashboard/doctors-list">Doctors</Link> | Add Doctor{" "}
      </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Doctor Details
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="flex flex-col relative h-10 lg:col-start-1 lg:col-end-3">
              <input
                {...register("name", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Name*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <input
                {...register("email", { required: true })}
                type="email"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Email*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
              <input
                {...register("phone", { required: true })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Phone*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-4">
              <input
                {...register("imageUrl", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                image Url*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10 lg:col-end-7 lg:col-start-4">
              <input
                {...register("hospitalName", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                hospital Name*
              </label>
            </div>

            {/* <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3  self-center">
              <input
                {...register("dob", { required: true })}
                type="date"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Date Of Birth*
              </label>
            </div> */}

            <div className=" flex flex-col relative w-full h-12 text-left  lg:col-end-3 lg:col-start-1">
              <label className="">Gender*</label>
              <div className=" flex gap-5">
                <div className=" space-x-3">
                  <input
                    {...register("gender", { required: true })}
                    className=""
                    type="radio"
                    name="gender"
                    value="male"
                    id=""
                  />
                  <label htmlFor="">Male</label>
                </div>
                <div className=" space-x-3">
                  <input
                    {...register("gender", { required: true })}
                    className=""
                    type="radio"
                    name="gender"
                    value="female"
                    id=""
                  />
                  <label htmlFor="">Female</label>
                </div>
              </div>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <input
                {...register("fees", { required: true, valueAsNumber: true })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Service Charge*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
              <input
                {...register("education", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Education*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <input
                {...register("experience", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Experience*
              </label>
            </div>

            <div className=" flex-col flex lg:col-start-3 lg:col-end-5">
              <select
                {...register("department", { required: true })}
                className="border shadow-sm rounded-lg h-10 text bg-white outline-secondary font-semibold text-gray-400"
              >
                <option disabled selected>
                  Select Department
                </option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Radiology">Radiology</option>
                <option value="Dentist">Dentist</option>
              </select>
            </div>

            <div className=" flex-col flex relative w-full lg:col-start-5 lg:col-end-7">
              <input
                {...register("qualifications", { required: true })}
                type="text"
                className="myInput peer h-10"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                qualifications*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <select
                {...register("division", { required: true })}
                className="border shadow-sm rounded-lg h-10 text bg-white outline-secondary font-semibold text-gray-400"
              >
                <option disabled selected>
                  Select Division
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <select
                {...register("district", { required: true })}
                className="border shadow-sm rounded-lg h-10 text bg-white outline-secondary font-semibold text-gray-400"
              >
                <option disabled selected>
                  Select district
                </option>
                <option value="Dhakaa">Dhakaa</option>
                <option value="Khulnaa">Khulnaa</option>
                <option value="Sylheat">Sylheta</option>
                <option value="Barishaal">Barishaal</option>
                <option value="Chattogaram">Chattoagram</option>
                <option value="Rajshaahi">Rajshahai</option>
                <option value="Ranagpur">Rangpura</option>
                <option value="Mymeansingh">Mymensaingh</option>
              </select>
            </div>

            {/* <div className="flex gap-4 items-center lg:col-start-3 lg:col-end-5">
              <div className="w-12 h-12 rounded-full shadow-lg border border-secondary text-xs text-center">
                {loadImage ? (
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src={loadImage}
                    alt=""
                  />
                ) : (
                  "No image"
                )}
              </div>
              <div className="">
                <label
                  htmlFor="image"
                  className="shadow-sm border text-textBlack px-4 py-2 rounded-lg cursor-pointer"
                >
                  Select Profile Picture
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  {...register("image", { required: true })}
                  onChange={fileHandle}
                />
              </div>
            </div> */}

            <div className=" flex justify-end gap-5 items-center lg:col-start-5 lg:col-end-7">
              <button type="submit" className=" bttn common-btn">
                {isLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Submit"
                )}
              </button>
              <button className="btn plan-btn">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
