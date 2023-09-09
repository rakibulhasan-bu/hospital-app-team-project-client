import React from 'react';
import useTypewriter from 'react-typewriter-hook';

const AboutUs: React.FC = () => {
  const typewriterText = useTypewriter('healthy life, wellness, and vitality');

  return (
    <div className="container mx-auto p-10 bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">
        The New Way to <span className="text-green-500">{typewriterText}</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <h2 className="text-xl md:w-2/3">
          <span className="font-handwriting text-4xl font-bold text-secondary">Lifecare</span> is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all".
        </h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          SEE OUR TEAM!
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
