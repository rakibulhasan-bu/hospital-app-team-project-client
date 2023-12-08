import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddBlogMutation } from "../../../redux/features/blog/blogApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

interface formInputs {
  title: string;
  author: string;
  description: string;
  district: string;
  phone: string;
  email: string;
  tags: string;
  imageUrl: string;
}

interface UpdateDoctorMutationResult {
  data: any;
  isSuccess: boolean;
  isError: boolean;
  error: { data: { message: string } };
  isLoading: boolean;
}

const AddNews = () => {
  const navigate = useNavigate();
  const [
    addDoctor,
    { data: doctorData, isSuccess, isError, error, isLoading },
  ] = useAddBlogMutation<UpdateDoctorMutationResult>();

  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    addDoctor(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${doctorData?.doctor?.name} doctor added successfully`);
      navigate("/dashboard/news-list");
    }
    if (isError) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error, isError, isSuccess, navigate]);
  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">Blog | Add Blog </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Blog Details
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="flex flex-col relative h-10 lg:col-start-1 lg:col-end-3">
              <input
                {...register("title", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Title*
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
                type="text"
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
                {...register("author", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Author Name*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-20 lg:col-start-1 lg:col-end-7">
              <input
                {...register("description", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Description*
              </label>
            </div>

            <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
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

export default AddNews;
