import { Link } from "react-router-dom";
import design from "../../assets/login-02.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/features/user/userSlice";
import { RootState } from "../../redux/store";
import toast from "react-hot-toast";

interface formInputs {
  name: string;
  email: string;
  password: unknown;
  confirmPassword: unknown;
  image: File;
  role: string;
}

const PatientRegister = () => {
  const dispatch = useDispatch();
  const { name, error, isError, email } = useSelector((state: RootState) => state.userState)
  const [loadImage, setLoadImage] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<formInputs>();
  const password = watch("password");

  const fileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setLoadImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const onSubmit: SubmitHandler<formInputs> = data => {
    const { name, email, confirmPassword, image, password, role } = data;
    dispatch(createUser({ name, email, password }))
    console.log(data);
  };
  useEffect(() => {
    if (email) {
      toast.success(`${name}welcome to Lifecare`)
    }
    if (isError) {
      toast.error(error)
    }
  }, [email, error, isError, name])
  return (
    <section className="bg-background w-full flex items-center justify-between">
      {/* these is left image section  */}
      <div className="w-1/2  hidden lg:flex items-center justify-center bg-secondary rounded-r-[50px]">
        <img className="object-cover w-[78%] 2xl:w-full" src={design} alt="" />
      </div>
      {/* these is right image section  */}
      <div className='w-full lg:w-1/2 px-2 lg:px-16 2xl:px-20'>
        <div className=" bg-white rounded-3xl p-4 lg:px-10 lg:py-8 2xl:p-10" >
          <h2 className="title text-center pb-2 2xl:pb-4 text-xl lg:text-3xl text-secondary">Patient Registration</h2>

          <form className="space-y-3 2xl:space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col relative w-full min-w-[200px]">
              <input
                type="text"
                className="myInput peer"
                placeholder=" "
                {...register("name", { required: true, maxLength: 20 })}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">Name*</label>
              {errors.name?.type === 'required' && <p className="text-sm text-red-500" role="alert">Name is required</p>}
            </div>

            <div className=" flex-col flex relative w-full min-w-[200px]">
              <input
                type="email"
                className="myInput peer"
                placeholder=" "
                {...register("email", { required: true })}
              />
              <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">Email*</label>
              {errors.email?.type === 'required' && <p className="text-sm text-red-500" role="alert">Email is required</p>}
            </div>

            <div className="flex flex-col">
              <div className="relative w-full min-w-[200px]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="myInput peer"
                  placeholder=" "
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "Password must be at least 8 characters long and include at least one letter and one number."
                    }
                  })}
                />
                <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">Password*</label>
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiOutlineEyeInvisible className="text-xl" /> : <AiOutlineEye className="text-xl" />}
                </button>
              </div>

              {errors.password?.type === 'required' && <p className="text-sm text-red-500" role="alert">Password is required</p>}
              {errors.password?.type === 'pattern' && <p className="text-sm text-red-500" role="alert">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col">
              <div className="relative w-full min-w-[200px]">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="myInput peer"
                  placeholder=" "
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
                <label className="myLabel before:content[' '] after:content[' '] peer-placeholder-shown:text-textGray">Confirm Password*</label>
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible className="text-xl" /> : <AiOutlineEye className="text-xl" />}
                </button>
              </div>
              {errors.confirmPassword?.type === 'required' && <p className="text-sm text-red-500" role="alert">Confirm Password is required</p>}
              {errors.confirmPassword?.message && <p className="text-sm text-red-500" role="alert">{errors.confirmPassword.message}</p>}
            </div>

            <div className='flex gap-4 items-center'>
              <div className="w-12 h-12 rounded-full shadow-lg border border-secondary">
                {loadImage ?
                  <img className="h-full w-full object-cover rounded-full" src={loadImage} alt="" />
                  : ""}
              </div>
              <div className=''>
                <label htmlFor="image" className="bg-blue-100 text-textBlack px-4 py-1 rounded-full cursor-pointer">Select Profile Picture</label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  {...register('image', { required: true })}
                  onChange={fileHandle}
                />
              </div>
              {(errors.image?.type === 'required' && !loadImage) && (
                <p className="text-sm text-red-500" role="alert">Profile Picture is required</p>
              )}
            </div>
            {/* this is hidden div  */}
            <input
              type="text"
              defaultValue='doctor'
              className="hidden"
              {...register("role", { required: true })}
            />
            <div className="flex items-center justify-between pt-2">
              <input className="bttn common-btn w-full cursor-pointer" type="submit" value="Register" />
            </div>
          </form>
          <div className=" pt-4 flex items-center justify-between gap-4">
            <p className=" text-gray-400 font-semibold">
              Have an account?
              <Link className=" text-secondary ml-2" to="/login">
                LogIn
              </Link>
            </p>
            <span className="text-textBlack font-semibold">Or</span>
            <div className="flex items-center justify-center gap-1 cursor-pointer group border border-secondary px-2 py-1 rounded">
              <FcGoogle className='text-xl' /> <span className="text-textBlack text-sm font-medium group-hover:text-secondary group-hover:font-semibold">Continue with Google</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientRegister;
