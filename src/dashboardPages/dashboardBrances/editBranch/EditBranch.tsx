import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetBranchByIdQuery,
  useUpdateBranchMutation,
} from "../../../redux/features/branch/branchApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
interface formInputs {
  name: string;
  phone: string;
  email: string;
  division: string;
  district: string;
  imageUrl: File;
}

const EditBranch = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const { data } = useGetBranchByIdQuery(id);

  const [updateBranch, { data: branch, isError, isLoading, isSuccess, error }] =
    useUpdateBranchMutation();

  const { register, handleSubmit } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = (branch) => {
    updateBranch({ id, branch });
  };

  useEffect(() => {
    if (!id) {
      navigate(`/dashboard/branches-list`);
    }
    if (isSuccess) {
      toast.success(`Branch updated successfully`);
      navigate(`/dashboard/branches-list`);
    }
    if (isError) {
      //   console.log(error?.data?.message);
      toast(error?.data?.message);
    }
  }, [isSuccess, isError, id]);

  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">Branch | Add Branch </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Branch Details
        </h2>

        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-1 lg:grid-cols-6 gap-5"
        >
          <div className="flex flex-col relative h-10 lg:col-start-1 lg:col-end-3">
            <input
              {...register("name")}
              type="text"
              className="myInput peer"
              placeholder=" "
              value={data?.branch?.name}
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
              defaultValue={data?.branch?.email}
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
              placeholder=""
              defaultValue={data?.branch?.phone}
            />
            <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
              Mobile*
            </label>
          </div>

          <div className=" flex-col flex relative w-full h-10 lg:col-start-1 lg:col-end-3">
            <select
              {...register("division")}
              value={data?.branch?.division}
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
              value={data?.branch?.district}
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

          <div className=" flex-col flex relative w-full h-10 lg:col-start-5 lg:col-end-7">
            <input
              {...register("imageUrl")}
              defaultValue={data?.branch?.imageUrl}
              type="text"
              className="myInput peer"
              placeholder=" "
            />
            <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
              image Url*
            </label>
          </div>

          <div className=" flex justify-start gap-5 items-center lg:col-start-1 lg:col-end-3">
            <button type="submit" className=" bttn common-btn">
              {isLoading ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                "Submit"
              )}
            </button>
            <button className="btn plan-btn">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditBranch;
