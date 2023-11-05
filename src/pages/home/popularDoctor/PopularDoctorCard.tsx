import { Link } from "react-router-dom";
interface Card {
  image: string;
  name: string;
  number: string;
  icon: any;
}

interface PopularDoctorCardProps {
  card: Card;
}

const PopularDoctorCard: React.FC<PopularDoctorCardProps> = ({ card }) => {
  return (
    <div className="hover:bg-gradient-to-b from-cyan-300 to-transparent p-[2px] rounded-3xl">
      <div className=" bg-white rounded-3xl p-6 flex flex-col gap-4 mb-10">
        <img className=" rounded-3xl" src={card.image} alt="" />
        <div className=" flex items-center gap-3">
          <span className=" bg-green-200 px-3 py-1 text-green-600">
            Cardiology
          </span>
          <span className=" bg-purple-200 px-3 py-1 text-purple-600">
            physiology
          </span>
        </div>
        <div>
          <Link className=" subTitle hover:text-secondary duration-300" to="/">
            {card.name}
          </Link>
          <p>Cardiologist</p>
        </div>
        <div>
          <button className="bttn common-btn">Consult</button>
        </div>
      </div>
    </div>
  );
};

export default PopularDoctorCard;
