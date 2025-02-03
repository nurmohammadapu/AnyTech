import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/icons/diagram-lines/logo.svg";
import { Link } from "react-router-dom";
import navProfilePic from '../assets/icons/navPic.avif';
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added for mobile menu toggle
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="mx-auto bg-blue-500 px-4 py-6">
        <header className="mx-auto w-8/12">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="logo" />
            </Link>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="group relative">
                <Link to="/solutions" className="flex items-center gap-2 text-white">
                  Solutions
                  <BsChevronDown className="w-4 h-4" />
                </Link>
                <div className="invisible absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <Link to="/anycaas" className="block px-4 py-2 border-b border-slate-200 hover:bg-gray-200">AnyCaaS</Link>
                  <Link to="/anybaas" className="block px-4 py-2 border-b border-slate-200 hover:bg-gray-200">AnyBaaS</Link>
                  <Link to="/anypaas" className="block px-4 py-2 hover:bg-gray-200">AnyPaaS</Link>
                </div>
              </div>
              
              <Link to="/services" className="text-white">Services</Link>
              <Link to="/about" className="text-white">About Us</Link>
              
              <div className="relative" ref={languageRef}>
                <button 
                  className="flex items-center gap-2 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangOpen(!isLangOpen);
                  }}
                >
                  EN
                  <BsChevronDown className="w-4 h-4" />
                </button>
                {isLangOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                    <Link to="/lang/en" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">EN</Link>
                    <Link to="/lang/th" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">TH (Thai)</Link>
                    <Link to="/lang/id" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">ID (Bahasa Indonesia)</Link>
                    <Link to="/lang/tw" className="block w-full text-left px-4 py-2 hover:bg-gray-200">TW (Traditional Chinese)</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navbar Toggle Button */}
            <div className="lg:hidden flex justify-between items-center">
              <button 
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>

            {/* Contact Us Button */}
            <button className="bg-blue-500 hidden lg:block border-2 font-semibold text-white border-white hover:bg-white hover:text-blue-500 px-4 py-2 ">
              <Link to="/contactus">
                Contact Us
              </Link>
            </button>
          </nav>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden h-screen bg-blue-500 text-white p-4">
          <div className="flex flex-col gap-4">
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/anycaas">AnyCaaS</Link>
            <Link to="/anybaas">AnyBaaS</Link>
            <Link to="/anypaas">AnyPaaS</Link>
            <div className="relative" ref={languageRef}>
              <button 
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
              >
                EN
                <BsChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                  <Link to="/lang/en" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">EN</Link>
                  <Link to="/lang/th" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">TH (Thai)</Link>
                  <Link to="/lang/id" className="block w-full border-b border-slate-200 text-left px-4 py-2 hover:bg-gray-200">ID (Bahasa Indonesia)</Link>
                  <Link to="/lang/tw" className="block w-full text-left px-4 py-2 hover:bg-gray-200">TW (Traditional Chinese)</Link>
                </div>
              )}
            </div>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className='w-8/12 mx-auto'>
          <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className="flex mx-auto flex-col justify-start px-4 py-32">
              <p className="text-5xl md:text-6xl font-bold text-white mb-6">
                Embrace the future of finance
              </p>
              <p className="text-xl text-white/90 mb-8 max-w-3xl">
                Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
              </p>
              <Link to="/contactus">
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Reach Out to Us →
                </button>
              </Link>
            </div>
            <div className='w-full mb-5'>
              <img className='rounded-md' src={navProfilePic} alt="navProfilePic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
