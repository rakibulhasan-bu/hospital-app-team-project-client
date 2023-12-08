import { Link, useNavigate } from "react-router-dom";
import design from "../../assets/login-02.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createUser } from "../../redux/features/user/userSlice";
import toast from "react-hot-toast";
import { useInsertUsersMutation } from "../../redux/features/user/userApi";

interface formInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: unknown;
  inputImage: File;
  role: string;
}

const DoctorRegister = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const [insertUser] = useInsertUsersMutation();
  const { name, error, isLoading, isError, email } = useSelector((state: RootState) => state.userState)
  const [image, setImage] = useState('')
  const [imageLoading, setImageLoading] = useState(false)
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

  const fileHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        setImageLoading(true)
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'Lifecare');
        formData.append('cloud_name', "xx");

        const uploadURL = `https://api.cloudinary.com/v1_1/xx/image/upload`;

        // Upload the image to Cloudinary
        const response = await fetch(uploadURL, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImage(data?.url)
          setImageLoading(false)
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        setImageLoading(false)
        console.error('Error uploading image:', error);
      }
    }
  };


  const onSubmit: SubmitHandler<formInputs> = data => {
    const { name, email, password } = data;
    insertUser({ email, userName: name, role: "DOCTOR", imageUrl: image });
    dispatch(createUser({ name, email, password, role: "DOCTOR" }))
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate('/')
      toast.success(`${name}, welcome to Lifecare`)
    }
    if (isError) {
      toast.error(error)
    }
  }, [email, error, isError, isLoading, name, navigate])
  return (
    <section className="bg-background w-full flex items-center justify-between">
      {/* these is left image section  */}
      <div className="w-1/2  hidden lg:flex items-center justify-center bg-secondary rounded-r-[50px]">
        <img className="object-cover w-[78%] 2xl:w-full" src={design} alt="" />
      </div>
      {/* these is right image section  */}
      <div className='w-full lg:w-1/2 px-2 lg:px-16 2xl:px-20'>
        <div className=" bg-white rounded-3xl p-4 lg:px-10 lg:py-8 2xl:p-10" >
          <h2 className="title text-center pb-2 2xl:pb-4 text-xl lg:text-3xl text-secondary">Doctor Registration</h2>

          <form className="space-y-3 2xl:space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label>
                <span className="text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="myInput"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name?.type === 'required' && <p className="text-sm text-red-500" role="alert">Name is required</p>}
            </div>

            <div className=" flex-col flex">
              <label>
                <span className="text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="myInput"
                {...register("email", { required: true })}
              />
              {errors.email?.type === 'required' && <p className="text-sm text-red-500" role="alert">Email is required</p>}
            </div>

            <div className="flex flex-col">
              <label>
                <span className="text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Type password"
                  className="myInput"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "Password must be at least 8 characters long and include at least one letter and one number."
                    }
                  })}
                />
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
              <label>
                <span className="text">Confirm password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  className="myInput"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
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
                {image ?
                  <img className="h-full w-full object-cover rounded-full" src={image} alt="" />
                  : ""}
              </div>
              <div className=''>
                <label htmlFor="image" className="bg-blue-100 text-textBlack px-4 py-1 rounded-full cursor-pointer">Select Profile Picture</label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  {...register('inputImage', { required: true })}
                  onChange={fileHandle}
                />
              </div>
              {(errors.inputImage?.type === 'required' && !image) && (
                <p className="text-sm text-red-500" role="alert">Profile Picture is required</p>
              )}
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="bttn common-btn w-full cursor-pointer"
              >
                {imageLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Register"
                )}
              </button>
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

export default DoctorRegister;
