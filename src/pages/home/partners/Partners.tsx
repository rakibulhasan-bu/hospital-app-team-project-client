import { FaCircle } from "react-icons/fa";

interface Card {
    img: string;
    title: string;
    number:string;
  }

const Partners: React.FC = () => {
    const cardData:Card[] = [
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
          title: 'Urology',
          number:'110'
        },
        {
          img: 'https://i.ibb.co/N7Q8DT6/bro-02.png',
          title: 'Neurology',
          number:'90'
        },
        {
          img: 'https://i.ibb.co/xHdjjWZ/bro-03.png',
          title: 'Orthopedic',
          number:'100'
        },
        {
          img: 'https://i.ibb.co/J34dDJs/bro-04.png',
          title: 'Cardiologist',
          number:'115'
        },
        {
          img: 'https://i.ibb.co/JzCyKRT/bro-05.png',
          title: 'Dentist',
          number:'105'
        },
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
          title: 'Heart surgery',
          number:'120'
        },
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
          title: 'Urology',
          number:'110'
        },
        {
          img: 'https://i.ibb.co/N7Q8DT6/bro-02.png',
          title: 'Neurology',
          number:'90'
        },
        {
          img: 'https://i.ibb.co/xHdjjWZ/bro-03.png',
          title: 'Orthopedic',
          number:'100'
        },
        {
          img: 'https://i.ibb.co/J34dDJs/bro-04.png',
          title: 'Cardiologist',
          number:'115'
        },
        {
          img: 'https://i.ibb.co/JzCyKRT/bro-05.png',
          title: 'Dentist',
          number:'105'
        },
        {
          img: 'https://i.ibb.co/tXq2jjP/bro-01.png',
          title: 'Heart surgery',
          number:'120'
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-7 mx-6">
      {cardData.map((card, index) => (
        <div key={index} className="card grid justify-items-center cursor-default border-8 hover:bg-sky-200 border-white rounded-lg p-4">
          <img className="bg-blue-500 p-3 rounded-full my-4" src={card.img} alt={`Card ${index + 1}`} />
          <h2 className="text-blue-600 font-semibold">{card.title}</h2>
          <p className="text-lg font-medium"><span className="text-red-600">{card.number}</span> Doctors</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-9 pb-6">
    <button className=" btn plan-btn">View More</button>
    </div>
            </section>
            <section className="grid grid-cols-2">
            <div className="relative bg-[url('https://i.ibb.co/f21Z6Q1/doctor-bg.jpg')] bg-cover bg-center h-screen">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="m-8 relative z-10">
    <h2 className="mt-12 mb-6 text-white">ARE YOU A DOCTOR?</h2>
    <p className="text-white">The service allows you to get maximum visibility online and to manage</p>
    <p className="text-white">appointments and contacts coming from the site, in a simple and fast way.</p>
  </div>
            </div>
            <div className="relative bg-[url('https://i.ibb.co/PDZQWRJ/doctor-right-bg.jpg')] bg-cover bg-center h-screen">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="m-8 relative z-10">
    <h2 className="mt-12 mb-6 text-white">ARE YOU A DOCTOR?</h2>
    <p className="text-white">The service allows you to get maximum visibility online and to manage</p>
    <p className="text-white">appointments and contacts coming from the site, in a simple and fast way.</p>
  </div>
            </div>
            </section>
        </div>
    );
};

export default Partners;