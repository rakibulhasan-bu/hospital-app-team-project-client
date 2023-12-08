import React, { useState } from "react";
import { BsFillQuestionDiamondFill, BsDiamondHalf } from "react-icons/bs";

interface AccordionProps {
  title: string;
  children: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3 border rounded shadow">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <BsDiamondHalf className="text-2xl" />
          ) : (
            <BsFillQuestionDiamondFill className="text-2xl" />
          )}
        </span>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
