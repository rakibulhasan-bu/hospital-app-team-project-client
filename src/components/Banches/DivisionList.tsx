import React from 'react';

interface DivisionData {
  [division: string]: string[];
}

interface DivisionListProps {
  data: DivisionData;
}

const DivisionList: React.FC<DivisionListProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {Object.keys(data).map((division, index) => (
        <div key={index}>
          <h2 className='py-2 underline text-secondary'>{division}</h2>
          <ul>
            {data[division].map((district, districtIndex) => (
              <li key={districtIndex} className='font-normal hover:underline hover:ps-1'>{district}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DivisionList;
