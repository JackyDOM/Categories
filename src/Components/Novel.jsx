// Bacll.js
import React from 'react';
import jsonData from '../Data.json';

const Novel = () => {
  const { items } = jsonData.novel;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Novel-${index}`} className="mt-5 pl-2 w-40 h-auto ml-3" />
          <div className=''>
            <h3 className="text-xl font-bold mb-2 ml-10">{item.title}</h3>
            <p className="text-sm mb-2 ml-10">{item.price}</p>
          </div>
          {/* Add your other Bacll-related content here */}
        </div>
      ))}
    </div>
  );
};

export default Novel;
