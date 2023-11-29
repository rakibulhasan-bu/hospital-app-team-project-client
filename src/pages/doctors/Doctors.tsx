import { Link } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { useGetDoctorsQuery } from "../../redux/features/doctor/doctorApi";
import { BiSearchAlt2 } from "react-icons/bi";

interface Card {
  imageUrl: string;
  _id: string;
  title: string;
  number: string;
  icon: any;
}

const Doctors: React.FC = () => {
  const { data, isLoading } = useGetDoctorsQuery("");

  // console.log(doctors, isError);
  // const cardData: Card[] = [
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Heart surgery",
  //     number: "120",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  //   {
  //     img: "https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-13.jpg",
  //     title: "Urology",
  //     number: "110",
  //     icon: FaCircle,
  //   },
  // ];
  return (
    <section className="px-5">
      <div className=" container mx-auto my-10">
        <h1 className=" text-center text-5xl font-semibold  text-primary dark:text-slate-400">
          Search Doctors
        </h1>
        <p className=" text-center mb-10">
          <Link to="/">Home</Link> | <span>Search doctor</span>
        </p>
        <div className="p-4 myBorder">
          <div className="flex items-center myInput px-0 py-0">
            <input
              className="w-full outline-none px-2 h-full"
              placeholder="search..."
              type="text"
              id=""
            />
            <div className="bg-secondary cursor-pointer p-2 h-full text-white border border-secondary text-xl">
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:flex justify-between gap-8 container mx-auto">
        <div className=" lg:w-2/5 2xl:w-2/5 w-full bg-gray-100 rounded px-1">
          <h1 className=" text-lg font-semibold mb-5">Filter</h1>

          <div className=" bg-white p-4">
            <h2 className=" text-lg font-semibold mb-5">Gender</h2>
            <div className=" mb-5">
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label htmlFor="">Male</label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label htmlFor="">Female</label>
              </div>
            </div>
            <h2 className=" text-lg font-semibold mb-5">Availability</h2>
            <div className=" mb-5">
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Available Today
                </label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Available Tomorrow
                </label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Available In next 7 Days
                </label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Available Today
                </label>
              </div>
            </div>
            <h2 className=" text-lg font-semibold mb-5">Speciality</h2>
            <div className=" mb-5">
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Urology
                </label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Ophthalmology
                </label>
              </div>
              <div className=" space-x-3">
                <input className="" type="checkbox" name="" id="" />
                <label className=" text-slate-500" htmlFor="">
                  Cardiology
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-3/5 2xl:w-3/5 w-full">
          {isLoading && <h2>Loading..</h2>}
          {data?.doctors?.map((card: Card) => (
            <DoctorCard key={card._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
