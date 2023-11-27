interface SingleProduct {
  _id: undefined;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  cashback: number;
  imageUrl: string;
}
interface PharmacyCardProps {
  card: SingleProduct;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ card }) => {
  return (
    <div className="w-64 m-4 mx-auto text-center">
      <img
        src={card.imageUrl}
        alt="medicine"
        className="h-auto max-w-full rounded-2xl"
      />
      <p className="mt-4 font-medium text-textGray">{card.name}</p>
    </div>
  );
};

export default PharmacyCard;
