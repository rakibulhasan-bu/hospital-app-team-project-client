import { ImSpinner9 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/product/productApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface formInputs {
  name: string;
  oldPrice: number;
  newPrice: number;
  cashback: number;
  description: string;
  imageUrl: string;
}

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<formInputs>();
  const { data: singleProduct } = useGetSingleProductQuery(id);
  console.log(singleProduct?.product?.name, id);
  const [updateProduct, { isLoading, data, isError, error, isSuccess }] =
    useUpdateProductMutation();

  const onSubmit: SubmitHandler<formInputs> = (updateData) => {
    updateProduct({ updateData, id });
  };

  useEffect(() => {
    if (!id) {
      navigate(`/dashboard/product-list`);
    }
    if (isSuccess) {
      toast.success(`product is updated successfully`);
      navigate(`/dashboard/product-list`);
    }
    if (isError) {
      toast(error?.data?.message);
    }
  }, [isSuccess, id, isError]);

  return (
    <section className="container mx-auto">
      <p className="py-6 text-primary font-medium">Products | Update Product</p>
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="mb-5 text-xl font-semibold text-primary">
          Product Details
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col relative h-10">
              <input
                {...register("name")}
                defaultValue={singleProduct?.product?.name}
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
                {...register("imageUrl")}
                defaultValue={singleProduct?.product?.imageUrl}
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
                {...register("oldPrice", {
                  min: 0,
                  valueAsNumber: true,
                })}
                defaultValue={singleProduct?.product?.oldPrice}
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
                {...register("newPrice", {
                  min: 0,
                  valueAsNumber: true,
                })}
                defaultValue={singleProduct?.product?.newPrice}
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
                {...register("cashback", {
                  min: 0,
                  valueAsNumber: true,
                })}
                defaultValue={singleProduct?.product?.cashback}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Cashback*
              </label>
            </div>

            <div className="flex-col flex relative w-full">
              <textarea
                {...register("description")}
                defaultValue={singleProduct?.product?.description}
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Description*
              </label>
            </div>

            <div className="flex justify-start gap-5 items-center">
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

export default EditProduct;
