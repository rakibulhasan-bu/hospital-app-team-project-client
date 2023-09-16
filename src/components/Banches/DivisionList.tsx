import React from "react";
import { FaLocationDot } from "react-icons/fa6";

interface DivisionData {
  [division: string]: string[];
}

interface DivisionListProps {
  data: DivisionData;
}

const DivisionList: React.FC<DivisionListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-3 text-white/70 md:grid-cols-2 lg:grid-cols-4">
      {Object.keys(data).map((division, index) => (
        <div key={index} className="p-5 border rounded-lg bg-primary">
          <h2 className="py-2 text-accent">
            <FaLocationDot className="inline-block me-3" />
            {division}
          </h2>
          <hr />
          <ul className="mt-2">
            {data[division].map((district, districtIndex) => (
              <li
                key={districtIndex}
                className="font-normal transition-all duration-300 hover:underline hover:text-white hover:ml-4"
              >
                {district}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DivisionList;
