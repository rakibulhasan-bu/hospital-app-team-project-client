interface Card {
  img: string;
  title: string;
}

interface PharmacyCardProps {
  card: Card;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ card }) => {
    return (
        <div className="w-64 m-4 mx-auto text-center">
        <img src={card.img} alt= "medicine" className="h-auto max-w-full rounded-2xl" />
        <p className="mt-4 font-medium text-textGray">{card.title}</p>
      </div>
    );
};

export default PharmacyCard;