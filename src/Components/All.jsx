// AllComponent.js
import React from 'react';
import Bacll from './Bacll';
import Comday from './Comday';
import Comics from './Comics';
import Novel from './Novel';

const AllComponent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 mt-6 ml-5">All Component</h2>
      <div className=''>
        <div className="">
            <Bacll className="" />
          </div>
          <div className="">
            <Comday className="" />
          </div>
          <div>
            <Comics />
          </div>
          <div>
            <Novel />
          </div>
      </div>
    </div>
  );
};

export default AllComponent;
