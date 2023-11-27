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
    <div className="hover:bg-gradient-to-b from-cyan-300 to-transparent p-[2px] rounded-3xl">
      <div className=" bg-white rounded-3xl pb-6 flex flex-col gap-4 mb-10">
        <img
          className=" rounded-t-3xl h-[240px] object-cover w-full object-top"
          src={card?.imageUrl}
          alt=""
        />
        <div className=" flex items-center gap-3 px-6">
          <span className=" bg-green-200 px-3 py-1 text-green-600">
            Cardiology
          </span>
          <span className=" bg-purple-200 px-3 py-1 text-purple-600">
            physiology
          </span>
        </div>
        <div className=" px-6">
          <Link className=" subTitle hover:text-secondary duration-300" to="/">
            {card.name}
          </Link>
          <p>{card.department}</p>
        </div>
        <div className=" px-6">
          <button className="bttn common-btn">Consult</button>
        </div>
      </div>
    </div>
  );
};

export default PopularDoctorCard;
