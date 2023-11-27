import { Link } from "react-router-dom";
interface Card {
  imageUrl: string;
  name: string;
  number: string;
  icon: any;
  department: string;
}

interface PopularDoctorCardProps {
  card: Card;
}

const PopularDoctorCard: React.FC<PopularDoctorCardProps> = ({ card }) => {
  return (
    <div className="hover:bg-gradient-to-b from-blue-400 to-transparent p-[3px] pb-0 rounded-3xl group">
      <div className=" bg-white rounded-3xl pb-6 flex flex-col gap-4 mb-10 overflow-hidden">
        <div className="overflow-hidden">
          <img
            className=" rounded-t-3xl h-[240px] object-cover w-full object-top hover:scale-110 duration-300"
            src={card?.imageUrl}
            alt=""
          />
        </div>

        <div className=" flex items-center gap-3 px-6">
          <span className=" bg-green-200 px-3 py-1 text-green-600">
            Cardiology
          </span>
          <span className=" bg-purple-200 px-3 py-1 text-purple-600">
            physiology
          </span>
        </div>
        <div className=" px-6">
          <h3 className=" text-secondary font-semi-bold text-xl">
            {card.name}
          </h3>

          <p>{card.department}</p>
        </div>
        <div className=" px-6">
          <Link to={`/appointment`}>
            <button className="bttn common-btn">Consult</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularDoctorCard;
