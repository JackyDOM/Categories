// Comday.js
import React from 'react';
import jsonData from '../Data.json';

const Comday = () => {
  const { items } = jsonData.comday;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Comday-${index}`} className="mt-5 pl-2 w-40 h-auto ml-3" />
          <h3 className="text-xl font-bold mb-2 ml-10">{item.title}</h3>
          <p className="text-sm mb-2 ml-10">{item.price}</p>
          {/* Add your other Bacll-related content here */}
        </div>
      ))}
    </div>
  );
};

export default Comday;
