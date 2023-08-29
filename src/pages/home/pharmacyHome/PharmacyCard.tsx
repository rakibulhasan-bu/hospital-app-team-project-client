interface Card {
  img: string;
  title: string;
}

interface PharmacyCardProps {
  card: Card;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ card }) => {
    return (
        <div className="m-4 w-64 text-center">
        <img src={card.img} alt= "medicine" className="max-w-full h-auto rounded-2xl" />
        <p className="font-medium mt-4 text-textGray">{card.title}</p>
      </div>
    );
};

export default PharmacyCard;