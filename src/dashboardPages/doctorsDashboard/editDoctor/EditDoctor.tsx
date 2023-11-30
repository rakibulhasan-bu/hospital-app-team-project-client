import { ImSpinner9 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetDoctorByIdQuery,
  useUpdateDoctorMutation,
} from "../../../redux/features/doctor/doctorApi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

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

const EditDoctor = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  console.log(id);

  const { data: singleDoctor } = useGetDoctorByIdQuery(id);
  const [updateDoctor, { data, isSuccess, isError, error, isLoading }] =
    useUpdateDoctorMutation<UpdateDoctorMutationResult>();
  console.log(data);

  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (doctor) => {
    updateDoctor({ id, doctor });
  };

  useEffect(() => {
    if (!id) {
      navigate(`/dashboard/doctors-list`);
    }
    if (isSuccess) {
      toast(`${data?.doctor?.name} is updated successfully`);
      navigate(`/dashboard/doctors-list`);
    }
    if (isError) {
      toast(error?.data?.message);
    }
  }, [isSuccess, isError, id, navigate, error?.data?.message]);

  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">Doctors | Add Doctor </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Doctor Details
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="flex flex-col relative h-10 lg:col-start-1 lg:col-end-3">
              <input
                {...register("name")}
                type="text"
                className="myInput peer"
                placeholder=" "
                defaultValue={singleDoctor?.doctor?.name}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Name*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-3 lg:col-end-5">
              <input
                {...register("email")}
                type="email"
                className="myInput peer"
                placeholder=" "
                defaultValue={singleDoctor?.doctor?.email}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Email*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
              <input
                {...register("phone")}
                type="number"
                className="myInput peer"
                placeholder=" "
                defaultValue={singleDoctor?.doctor?.phone}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Phone*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-4">
              <input
                {...register("imageUrl")}
                type="text"
                className="myInput peer"
                placeholder=" "
                defaultValue={singleDoctor?.doctor?.imageUrl}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                image Url*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10 lg:col-end-7 lg:col-start-4">
              <input
                {...register("hospitalName")}
                type="text"
                className="myInput peer"
                placeholder=" "
                value={singleDoctor?.doctor?.hospitalName}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                hospital Name*
              </label>
            </div>

            <div className=" flex flex-col relative w-full h-12 text-left  lg:col-end-3 lg:col-start-1">
              <label className="">Gender*</label>
              <div className=" flex gap-5">
                <div className=" space-x-3">
                  <input
                    {...register("gender")}
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
                    {...register("gender")}
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
                {...register("fees")}
                type="number"
                className="myInput peer"
                placeholder=" "
                defaultValue={singleDoctor?.doctor?.fees}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Service Charge*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
              <input
                {...register("education")}
                type="text"
                className="myInput peer"
                placeholder=" "
                value={singleDoctor?.doctor?.education}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Education*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <input
                {...register("experience", {
                  valueAsNumber: true,
                })}
                type="number"
                className="myInput peer"
                placeholder=" "
                value={singleDoctor?.doctor?.experience}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Experience*
              </label>
            </div>

            <div className=" flex-col flex lg:col-start-3 lg:col-end-5">
              <select
                value={singleDoctor?.doctor?.department}
                {...register("department")}
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
                {...register("qualifications")}
                type="text"
                className="myInput peer h-10"
                placeholder=" "
                value={singleDoctor?.doctor?.qualifications}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                qualifications*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
              <select
                {...register("division")}
                value={singleDoctor?.doctor?.division}
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
                {...register("district")}
                value={singleDoctor?.doctor?.district}
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

export default EditDoctor;
