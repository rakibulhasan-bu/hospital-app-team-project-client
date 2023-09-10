import React from "react";
import { BsFillQuestionDiamondFill, BsDiamondHalf } from "react-icons/bs";

interface AccordionProps {
  title: string;
  details?: string;
  isOpen: boolean; // Whether the accordion is open
  onToggle: () => void; // Callback to toggle the accordion
}

const Accordion: React.FC<AccordionProps> = ({ title, details, isOpen, onToggle }) => {
  return (
    <div className="mt-3 border rounded shadow">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={onToggle} // Use the provided callback to toggle the accordion
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <BsDiamondHalf className="text-2xl" />
          ) : (
            <BsFillQuestionDiamondFill className="text-2xl" />
          )}
        </span>
      </div>
      {isOpen && <div className="p-4 text-black">{details}</div>}
    </div>
  );
};

export default Accordion;
