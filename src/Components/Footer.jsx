import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="font-space flex flex-col gap-24 justify-between bg-gray-100 pt-20">
      <div className="bg-[url('/LandingPageBg.jpg')] h-[290px] w-[85%] rounded-md bg-cover bg-center mx-auto flex items-center justify-between p-16 max-[600px]:p-4">
        <div>
          <div className="text-white text-3xl font-bold w-[60%] max-[1000px]:w-full">
            Ready to Transform the Way You Learn from Videos{" "}
          </div>
          <button className="px-4 py-2 bg-[#3f3eed] rounded-[25px] justify-center items-center inline-flex text-white text-base font-medium mt-4">
            Get Started
          </button>
        </div>
        <img className="max-[1000px]:hidden block" src="/ph.png" alt="" />
      </div>
      <footer className="bg-gray-900 text-white py-10 px-3">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* Logo Placeholder */}
              <div className="h-8 w-8 flex items-center justify-center mr-2">
                {/* Replace with your logo */}
                <img src="/Clip.svg" alt="" />
              </div>
              <h2 className="font-bold text-lg">Distill Audio</h2>
            </div>
            <p className="text-gray-400 text-sm">
              A powerful tool to transcribe, summarize, and explore knowledge
              from podcasts and audio files with ease.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold mb-4">Quick Links:</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="font-bold mb-4">Social Media Links:</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="font-bold mb-4">News & Update</h2>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 w-full rounded bg-gray-800 text-sm text-white focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-gray-400 text-xs">
              Subscribe our newsletter for future updates. Don’t worry we don’t
              spam your email address.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Distill Audio. All rights reserved.
            </p>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
