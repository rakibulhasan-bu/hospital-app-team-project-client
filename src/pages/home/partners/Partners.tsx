import { FaCircle } from "react-icons/fa";

interface Card {
    img: string;
    title: string;
  }

const Partners: React.FC = () => {
    const cardData:Card[] = [
        {
          img: 'image-url-1.jpg',
          title: 'Card 1 Title',
        },
        {
          img: 'image-url-2.jpg',
          title: 'Card 2 Title',
        },
        {
          img: 'image-url-1.jpg',
          title: 'Card 1 Title',
        },
        {
          img: 'image-url-2.jpg',
          title: 'Card 2 Title',
        },
        {
          img: 'image-url-1.jpg',
          title: 'Card 1 Title',
        },
        {
          img: 'image-url-2.jpg',
          title: 'Card 2 Title',
        },
        
      ];
    return (
        <div className="container px-2 mx-auto my-10 text-xl lg:min-h-screen lg:px-0 bg-sky-100">
            <section >
            <div className="text-center pt-12">
            <h1 className="flex items-center justify-center gap-1 mb-5 text-2xl font-semibold text-secondary/90 ">
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
              <span className="mx-1 text-3xl">Browse by Specialities</span>
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
            </h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            <p className="text-slate-500">tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="grid grid-cols-6 gap-3 mx-6">
      {cardData.map((card, index) => (
        <div key={index} className="card border-4 border-white rounded-lg p-4">
          <img src={card.img} alt={`Card ${index + 1}`} />
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
            </section>
        </div>
    );
};

export default Partners;