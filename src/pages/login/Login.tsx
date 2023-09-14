import { Link, useLocation, useNavigate } from "react-router-dom";
import design from "../../assets/login-02.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/features/user/userSlice";
import { RootState } from "../../redux/store";
import toast from "react-hot-toast";

interface formInputs {
  email: string;
  password: unknown;
  role: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.path || "/";
  const { name, error, isLoading, isError, email } = useSelector((state: RootState) => state.userState)
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();

  const onSubmit: SubmitHandler<formInputs> = data => {
    const { email, password } = data;
    dispatch(signInUser({ email, password }))
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate(from, { replace: true });
      toast.success(`${name}, Lifecare login successful`)
    }
    if (isError) {
      toast.error(error)
    }
  }, [email, error, from, isError, isLoading, name, navigate])

  return (
    <section className="bg-background w-full flex items-center justify-between">
      {/* these is left image section  */}
      <div className="w-1/2  hidden lg:flex items-center justify-center bg-secondary rounded-r-[50px]">
        <img className="object-cover w-[78%] 2xl:w-full" src={design} alt="" />
      </div>
      {/* these is right image section  */}
      <div className='w-full lg:w-1/2 px-2 lg:px-16 2xl:px-20'>
        <div className=" bg-white rounded-3xl p-4 lg:px-10 lg:py-8 2xl:p-10" >
          <h2 className="title text-center pb-2 2xl:pb-4 text-xl lg:text-3xl text-secondary">Welcome to Lifecare</h2>

          <form className="space-y-3 2xl:space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("password", { required: true })}
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

            <div className="flex items-center justify-between pt-2">
              <input className="bttn common-btn w-full cursor-pointer" type="submit" value="Register" />
            </div>
          </form>

          <div className=" pt-4 flex flex-col items-center justify-between gap-1">
            <p className=" text-gray-400 font-semibold">
              Didn&apos;t have an account?
              <Link className=" text-secondary ml-2" to="/register">
                Register
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

export default Login;
