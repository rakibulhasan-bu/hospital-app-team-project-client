import { FaAward, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Card {
  imageUrl: string;
  title: string;
  number: string;
  icon: any;
}

interface DoctorCardProps {
  card: Card;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ card }) => {
  return (
    <div className=" bg-white rounded-3xl p-6 lg:flex gap-4 mb-10 justify-between border-2 border-secondary">
      <div className=" lg:flex gap-5 items-center">
        <div className=" overflow-hidden rounded-3xl">
          <img
            className=" rounded-3xl w-40 h-40 object-cover object-top hover:scale-110  duration-300"
            src={card.imageUrl}
            alt=""
          />
        </div>
        <div className=" space-y-3">
          <Link className=" subTitle hover:text-secondary duration-300" to="/">
            Dr Jonathan Behar
          </Link>
          <p className=" text-xs text-slate-400 font-semibold">Cardiologist</p>
          <div className=" flex items-center gap-5">
            <FaAward />
            <span>
              20{" "}
              <span className=" text-slate-400 font-medium">
                years of Experience
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5">
        <span className=" bg-green-200 py-1 text-green-600 text-center rounded">
          Avaiable Today
        </span>
        <div className=" flex items-center gap-5">
          <FaDollarSign />
          <span>$ 1500</span>
        </div>
        <Link to={`/appointment`} className="bttn common-btn">
          Book Appointment
        </Link>
        <Link to={`/appointment`} className="btn plan-btn text-sm">
          Book Online Consultation
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
