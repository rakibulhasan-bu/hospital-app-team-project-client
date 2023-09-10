import React, { useState, useEffect } from 'react';
import AccordionBody from './AccordionBody';


const AboutUs: React.FC = () => {
  const words = ['healthy', 'life', 'wellness', 'vitality'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="container mx-auto p-10 h- flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-start">
        The New Way to{' '}
        <span
          className="text-white bg-primary p-2 rounded transition-all duration-500 slide-text"
        >
          {words[currentWordIndex]}
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <h2 className="text-xl text-textBlack md:w-2/3">
          <span className="font-handwriting text-4xl font-bold text-secondary">Lifecare</span> is committed to rendering the highest standard service to the people of the country at an affordable cost. This will definitely reduce the burden on the government and pave the way for "Health for all."
        </h2>
        <button className="bttn common-btn">
          SEE OUR TEAM!
        </button>
      </div>
    </div>
    <AccordionBody></AccordionBody>
    </>
  );
}

export default AboutUs;
