import SectionHeading from "../../../components/sharedTitle/SectionHeading";

interface Card {
  img: string;
  title: string;
  number: string;
}

const Specialities: React.FC = () => {
  const cardData: Card[] = [
    {
      img: "https://i.ibb.co/tXq2jjP/bro-01.png",
      title: "Urology",
      number: "110",
    },
    {
      img: "https://i.ibb.co/N7Q8DT6/bro-02.png",
      title: "Neurology",
      number: "90",
    },
    {
      img: "https://i.ibb.co/xHdjjWZ/bro-03.png",
      title: "Orthopedic",
      number: "100",
    },
    {
      img: "https://i.ibb.co/J34dDJs/bro-04.png",
      title: "Cardiologist",
      number: "115",
    },
    {
      img: "https://i.ibb.co/JzCyKRT/bro-05.png",
      title: "Dentist",
      number: "105",
    },
    {
      img: "https://i.ibb.co/tXq2jjP/bro-01.png",
      title: "Heart surgery",
      number: "120",
    },
    {
      img: "https://i.ibb.co/tXq2jjP/bro-01.png",
      title: "Urology",
      number: "110",
    },
    {
      img: "https://i.ibb.co/N7Q8DT6/bro-02.png",
      title: "Neurology",
      number: "90",
    },
    {
      img: "https://i.ibb.co/xHdjjWZ/bro-03.png",
      title: "Orthopedic",
      number: "100",
    },
    {
      img: "https://i.ibb.co/J34dDJs/bro-04.png",
      title: "Cardiologist",
      number: "115",
    },
    {
      img: "https://i.ibb.co/JzCyKRT/bro-05.png",
      title: "Dentist",
      number: "105",
    },
    {
      img: "https://i.ibb.co/tXq2jjP/bro-01.png",
      title: "Heart surgery",
      number: "120",
    },
  ];
  return (
    <div className="container px-2 mx-auto my-10 text-xl lg:min-h-screen lg:px-0 2xl:py-16">
      <section>
        <div data-aos="fade-up" data-aos-duration="3000">
          <SectionHeading
            semiSubTitle="Explore Specialized Care at Our Hospital"
            title="Browse by Specialities"
            subTitle="Navigate through our comprehensive list of specialized departments to ensure you receive the personalized treatment you deserve."
          />
        </div>
        <div
          data-aos="fade-down"
          className="grid grid-cols-2 gap-4 mx-6 md:grid-cols-4 lg:grid-cols-6 mt-7"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="grid p-4 rounded-lg cursor-default card justify-items-center bg-sky-100 hover:bg-sky-200"
            >
              <img
                className="p-3 my-4 bg-blue-500 rounded-full"
                src={card.img}
                alt={`Card ${index + 1}`}
              />
              <h2 className="font-semibold text-blue-600">{card.title}</h2>
              <p className="text-lg font-medium">
                <span className="text-red-600">{card.number}</span> Doctors
              </p>
            </div>
          ))}
        </div>
        <div className="pb-6 text-center mt-9">
          <button className=" btn plan-btn">View More</button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          data-aos="fade-up"
          className="relative bg-[url('https://i.ibb.co/f21Z6Q1/doctor-bg.jpg')] bg-cover bg-center "
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 m-10">
            <h2 className="mt-24 mb-12 text-5xl font-bold text-white">
              Are You A Patient?
            </h2>
            <p className="mb-16 text-white">
              The service allows you to get maximum visibility online and to
              manage appointments and contacts coming from the site, in a simple
              and fast way.
            </p>
            <div className=" mb-9">
              <button className=" btn plan-btn">Book Now</button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative bg-[url('https://i.ibb.co/PDZQWRJ/doctor-right-bg.jpg')] bg-cover bg-center "
        >
          <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
          <div className="relative z-10 m-8">
            <h2 className="mt-24 mb-12 text-5xl font-bold text-white">
              ARE YOU A DOCTOR?
            </h2>
            <p className="mb-16 text-white">
              The service allows you to get maximum visibility online and to
              manage appointments and contacts coming from the site, in a simple
              and fast way.
            </p>
            <div className=" mb-9">
              <button className=" btn plan-btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialities;
