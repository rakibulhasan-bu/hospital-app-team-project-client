import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface formInputs {
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: File;
}

const AddProduct = () => {
  const [loadImage, setLoadImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInputs>();

  const fileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setLoadImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<formInputs> = (data) => {
    console.log(data);
  };

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
                {...register("category", { required: true })}
                type="text"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Category*
              </label>
            </div>
            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("price", { required: true, min: 0 })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Price*
              </label>
            </div>
            <div className="flex-col flex relative w-full h-10">
              <input
                {...register("stock", { required: true, min: 0 })}
                type="number"
                className="myInput peer"
                placeholder=" "
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">
                Stock*
              </label>
            </div>
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
            <div className="flex gap-4 items-center">
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
              <div>
                <label
                  htmlFor="image"
                  className="shadow-sm border text-textBlack px-4 py-2 rounded-lg cursor-pointer"
                >
                  Select Product Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  {...register("image", { required: true })}
                  onChange={fileHandle}
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 items-center">
              <button type="submit" className="btn common-btn">
                Submit
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
