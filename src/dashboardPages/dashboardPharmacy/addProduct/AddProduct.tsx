import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import { ImSpinner9 } from "react-icons/im";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface formInputs {
  name: string;
  oldPrice: number;
  newPrice: number;
  cashback: number;
  description: string;
  imageUrl: string;
}

const AddProduct = () => {
  const [createProduct, { isError, isLoading, data: productData, error, isSuccess }] = useCreateProductMutation("product");

  const {
    register,
    handleSubmit
  } = useForm<formInputs>();

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    createProduct(data)
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${productData?.product?.name} doctor added successfully`);
      navigate("/dashboard/product-list")
    }
    if (isError) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error, isError, isSuccess, navigate])

  return (
    <section className="container mx-auto">
      <p className="py-6 text-primary font-medium">Products | Add Product</p>
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="mb-5 text-xl font-semibold text-primary">
          Product Details
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col relative h-10">
              <input
                {...register("name", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Product Name*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("imageUrl", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                imageUrl*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("oldPrice", { required: true, min: 0, valueAsNumber: true })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Old Price*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("newPrice", { required: true, min: 0, valueAsNumber: true })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                New Price*
              </label>
            </div>

            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("cashback", { required: true, min: 0, valueAsNumber: true })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Cashback*
              </label>
            </div>

            {/* <div className="flex-col flex relative w-full h-10">
              <input
                {...register("stock", { required: true, min: 0 })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Stock*
              </label>
            </div> */}

            <div className="flex-col flex relative w-full h-20">
              <textarea
                {...register("description", { required: true })}
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Description*
              </label>
            </div>

            <div className="flex justify-end gap-5 items-center">
              <button type="submit" className="btn common-btn">
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

export default AddProduct;
