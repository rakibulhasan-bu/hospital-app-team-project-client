
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaRegPaperPlane } from "react-icons/fa6";

const BranchesCard = () => {
  return (
    <div className="h-40 mx-auto overflow-hidden border border-textBlack/50 w-max">
      <div className="flex items-center font-semibold text-textBlack/70">
        <div className="m-3">
          <a href="#">
            <FaLocationDot className="inline text-secondary" /> Sadar, Gazipur
          </a>
          <h3 className="">
            <FaPhoneAlt className="inline text-secondary" /> Contact:
            01675543210
          </h3>
          <h3 className="">
            <FaRegPaperPlane className="inline text-secondary" />{" "}
            gazipur@lifecare.com
          </h3>
          <h1 className="mt-2 font-bold text-secondary">
            Lifecare Hospital Gazipur
          </h1>
        </div>
        <img
          src="https://res.cloudinary.com/dth0nno0p/image/upload/v1693534293/hospital_kisskz.jpg"
          alt=""
          className="w-40 h-40"
        />
      </div>
    </div>
  );
};

export default BranchesCard;
