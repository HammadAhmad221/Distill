// import React from 'react'

// const Header = () => {
//   return (
//     <>
// {/* <div className="bg-[#151f39]"> */}
// <header className="bg-[#151f39] shadow-md text-white font-space sticky top-0 z-50">
//     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//     <div className="w-8 h-8 flex items-center gap-2">
//         <img src="/Clip.svg" alt="" />
//       <div className="text-sm font-bold font-['Space Grotesk'] whitespace-nowrap">
//       Distill Audio
//       </div>
//     </div>

//       <nav className="gap-16 hidden md:flex">
//         <a href="#" className="hover:text-[#3F3EED]">Home</a>
//         <a href="#" className="hover:text-[#3F3EED]">Features</a>
//         <a href="#" className="hover:text-[#3F3EED]">About Us</a>
//         <a href="#" className="hover:text-[#3F3EED]">FAQ's</a>
//         <a href="#" className="hover:text-[#3F3EED]">Contact</a>
//       </nav>

//       <div className="flex items-center gap-6">
//         <a href="#" className="hover:text-[#3F3EED]">Sign In</a>
//         <button className="bg-[#D9D9D90F] text-white px-6 py-2 rounded-full">
//           Dashboard
//         </button>
//       </div>
//     </div>
//   </header>
// {/* </div> */}
//     </>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[#151f39] shadow-md text-white font-space sticky top-0 z-50 ">
        <div className="px-4 py-4 flex justify-between items-center lg:w-[90%] md:w-full lg:mx-auto">
          <div className="w-8 h-8 flex items-center gap-2">
            <img src="/Clip.svg" alt="" />
            <div className="text-sm font-bold whitespace-nowrap">
              Distill Audio
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="gap-16 hidden md:flex max-[1000px]:gap-4">
            <a href="/" className="hover:text-[#3F3EED]">Home</a>
            <a href="/coming" className="hover:text-[#3F3EED]">Features</a>
            <a href="/coming" className="hover:text-[#3F3EED]">About Us</a>
            <a href="/coming" className="hover:text-[#3F3EED]">FAQ's</a>
            <a href="/coming" className="hover:text-[#3F3EED]">Contact</a>

          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>

          <div className="items-center gap-6 hidden md:flex">
            <a href="/login" className="hover:text-[#3F3EED]">Sign In</a>
            <button className="bg-[#D9D9D90F] text-white px-6 py-2 rounded-full"
            onClick={()=>{navigate('/dashboard')}}>
              Dashboard
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-[#151f39] py-4 px-4">
            <a href="/" className="block py-2 hover:text-[#3F3EED]">Home</a>
            <a href="/coming" className="block py-2 hover:text-[#3F3EED]">Features</a>
            <a href="/coming" className="block py-2 hover:text-[#3F3EED]">About Us</a>
            <a href="/coming" className="block py-2 hover:text-[#3F3EED]">FAQ's</a>
            <a href="/coming" className="block py-2 hover:text-[#3F3EED]">Contact</a>
            <a href="/login" className="block py-2 hover:text-[#3F3EED]">Sign In</a>
            <button className="bg-[#D9D9D90F] text-white w-full px-6 py-2 mt-2 rounded-full" onClick={()=>{navigate('/dashboard')}}>
              Dashboard
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
