
// import React from 'react';

//     const Nav = () => {
//       return (
//         <header className="border-b border-[#e5e4ff] p-4 flex justify-between items-center">
//           {/* <h1 className="text-lg font-semibold">Welcome to Distill Audio</h1> */}
//           <div className="w-8 h-8 flex items-center gap-2">
//             <img src="/Clip.svg" alt="" />
//             <div className="text-sm font-bold whitespace-nowrap">
//               Distill Audio
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="bg-yellow-400 px-4 py-2 rounded-full">Update</button>
//             <div className="relative">
//               <input
//                 type="text"
//                 className="bg-white text-black rounded-full px-4 py-2"
//                 placeholder="Search"
//               />
//               <i className="fa fa-search absolute top-3 right-3 text-gray-500"></i>
//             </div>
//           </div>
//         </header>
//       );
//     };
    
//     export default Nav;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <header className="border-b border-[#e5e4ff] p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="w-8 h-8 flex items-center gap-2">
        <img src="/Clip.svg" alt="Distill Audio Logo" />
        <div className="text-sm font-bold whitespace-nowrap">Distill Audio</div>
      </div>

      {/* Buttons and Icons */}
      <div className="flex gap-6 items-center space-x-4">
        <button className="flex items-center gap-2 bg-[#3F3EED] px-4 py-2 rounded-lg text-white"><img src="/buttoncrown.svg" alt="c" />Update</button>

        {/* Icons Section */}
        <div className="flex gap-3 items-center space-x-4">
          {/* Search Icon */}
          <button>
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-2xl" />
          </button>

          {/* Notifications Icon */}
          <button>
            <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl" />
          </button>

          {/* Language Icon */}
          <button>
            <FontAwesomeIcon icon={faGlobe} className="text-gray-600 text-2xl" />
          </button>

          {/* Profile Icon */}
          <button>
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-600 text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
