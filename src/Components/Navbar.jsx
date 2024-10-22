import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faGlobe,
  faUserCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-[#e5e4ff] p-4 flex justify-between items-center w-full">
      {/* Logo Section */}
      <div className="w-8 h-8 flex items-center gap-2">
        <img src="/Clip.svg" alt="Distill Audio Logo" />
        <div className="text-sm font-bold whitespace-nowrap">Distill Audio</div>
      </div>

      {/* Buttons and Icons */}
      <div className="hidden md:flex gap-6 items-center">
        <button className="flex items-center gap-2 bg-[#3F3EED] px-4 py-2 rounded-lg text-white">
          <img src="/buttoncrown.svg" alt="c" />
          Update
        </button>

        {/* Icons Section */}
        <div className="flex gap-3 items-center space-x-4">
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-600 text-2xl"
            />
          </button>
          <button>
            <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl" />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-gray-600 text-2xl"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-gray-600 text-2xl"
            />
          </button>
        </div>
      </div>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-gray-600 text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white border border-[#e5e4ff] rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <button className="flex items-center gap-2 bg-[#3F3EED] px-4 py-2 rounded-lg text-white">
            <img src="/buttoncrown.svg" alt="c" />
            Update
          </button>
          <button className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-600 text-2xl"
            />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl" />
            <span>Notifications</span>
          </button>
          <button className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-gray-600 text-2xl"
            />
            <span>Language</span>
          </button>
          <button className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-gray-600 text-2xl"
            />
            <span>Profile</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
