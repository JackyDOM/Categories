// App.js
import React, { useState } from 'react';
import Bacll from './Components/Bacll';
import Comday from './Components/Comday';
import AllComponent from './Components/All';
import Comics from './Components/Comics';
import Novel from './Components/Novel';

function App() {
  const [activeComponent, setActiveComponent] = useState('all');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className=" flex ">
      {/* Navigation Section */}
      <div className="flex flex-col space-y-4 pr-8 mt-6 pt-8">
        <p className='ml-10 text-lg text-blue-600'>Categories</p>

        <button
          className={`px-4 ml-5 py-2 border rounded ${activeComponent === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleComponentChange('all')}
        >
          Show All
        </button>

        <button
          className={`px-4 ml-5 py-2 border rounded ${activeComponent === 'bacll' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleComponentChange('bacll')}
        >
          Show Bacll
        </button>

        <button
          className={`px-4 ml-5 py-2 border rounded ${activeComponent === 'comday' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleComponentChange('comday')}
        >
          Show Comday
        </button>

        <button
          className={`px-4 ml-5 py-2 border rounded ${activeComponent === 'comic' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleComponentChange('comic')}
        >
          Show Comic
        </button>

        <button
          className={`px-4 ml-5 py-2 border rounded ${activeComponent === 'novel' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => handleComponentChange('novel')}
        >
          Show Novel
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-grow ml-8 mt-6 ">
        <div
        className="max-w-screen-lg overflow-y-auto "
        style={{ maxHeight: 'calc(100vh - 120px)' }}>
          {/* Adjust max-height to fit your layout */}
          {activeComponent === 'all' && <AllComponent />}
          {activeComponent === 'bacll' && <Bacll />}
          {activeComponent === 'comday' && <Comday />}
          {activeComponent === 'comic' && <Comics />}
          {activeComponent === 'novel' && <Novel />}
          
        </div>
      </div>
    </div>
  );
}

export default App;
