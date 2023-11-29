import React, { useState, useEffect } from "react";
import AccordionBody from "./AccordionBody";
import Timeline from "./Timeline";

const AboutUs: React.FC = () => {
  const words = ["healthy", "life", "wellness", "vitality"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <div className="container mx-auto p-10 my-8 flex flex-col">
        <h1 className="text-4xl font-bold mb-4 text-start">
          The New Way to{" "}
          <span className="text-white bg-primary p-2 rounded transition-all duration-500 slide-tex">
            {words[currentWordIndex]}
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <h2 className="text-xl text-textBlack md:w-2/3">
            <span className="font-handwriting text-4xl font-bold text-secondary">
              Lifecare
            </span>{" "}
            is committed to rendering the highest standard service to the people
            of the country at an affordable cost. This will definitely reduce
            the burden on the government and pave the way for "Health for all."
          </h2>
          <button className="bttn common-btn">SEE OUR TEAM!</button>
        </div>
      </div>
      <section id="about-us" className="bg-blue-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 lg:pr-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600">
                LifeCare Hospital is a leading healthcare institution dedicated
                to providing exceptional medical services and compassionate
                care. Established in 2020, LifeCare Hospital has been at the
                forefront of delivering high-quality healthcare solutions to the
                community. Our commitment to excellence in patient care is
                unwavering, making us a trusted name in the healthcare industry.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <img
                src="https://i.ibb.co/NNZRTWp/hospital-building-modern-parking-lot-59693686.jpg"
                alt="LifeCare Hospital"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <AccordionBody></AccordionBody>
      <Timeline></Timeline>
    </>
  );
};

export default AboutUs;
