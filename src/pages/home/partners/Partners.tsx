import { FaCircle } from "react-icons/fa";

interface Card {
    img: string;
    title: string;
  }

const Partners: React.FC = () => {
    const cardData:Card[] = [
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
          title: 'Card 1 Title',
        },
        {
          img: 'https://i.ibb.co/N7Q8DT6/bro-02.png',
          title: 'Card 2 Title',
        },
        {
          img: 'https://i.ibb.co/xHdjjWZ/bro-03.png',
          title: 'Card 1 Title',
        },
        {
          img: 'https://i.ibb.co/J34dDJs/bro-04.png',
          title: 'Card 2 Title',
        },
        {
          img: 'https://i.ibb.co/JzCyKRT/bro-05.png',
          title: 'Card 1 Title',
        },
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
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
            <div className="grid grid-cols-6 gap-3 mt-7 mx-6">
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