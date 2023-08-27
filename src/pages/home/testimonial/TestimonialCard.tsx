import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="max-w-[80%] p-10 m-3 lg:my-12 bg-accent/50 rounded-2xl text-textBlack/80">
      <h5 className="text-black ">July 03,2023</h5>
      <div className="flex flex-wrap-reverse justify-between">
        <div className="flex gap-1 text-amber-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <img
          src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/clients/client-01.jpg"
          alt="patient"
          className="absolute top-0 z-0 object-cover rounded-full right-2 md:right-16 md:rounded-2xl w-36 h-36"
        />
      </div>

      <p className="my-5">
        I recently had a minor surgery at LifeCare Hospital. The surgical team,
        led by Dr. Martinez, was highly skilled and made me feel at ease
        throughout the process. However, I did experience some delays in
        scheduling, and the communication between the nursing staff and the
        administrative team, managed by Ms. 
      </p>
      <h2 className="text-2xl font-bold text-black">Robert Lewis</h2>
      <h5>Texus, USA</h5>
    </div>
  );
};

export default TestimonialCard;
