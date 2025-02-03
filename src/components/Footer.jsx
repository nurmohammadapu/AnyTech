import { Link } from "react-router-dom";
import logo from "../assets/icons/diagram-lines/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const navLinks = [
    { href: "/solutions", label: "Our Solutions" },
    { href: "/anycaas", label: "AnyCaaS" },
    { href: "/anybaas", label: "AnyBaaS" },
    { href: "/anypaas", label: "AnyPaaS" },
  ];

  return (
    <div>
        {/* Hero Section */}
        <div className="flex-1 relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 overflow-hidden">
        {/* Content */}
        <div className="w-10/12 container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Legacy no longer</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Talk to us to find out how we can transform your organisation for the future
          </p>
          <Link to="/contactus">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Us →
          </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div>
        {/* Logo and Navigation */}
        <div className="flex bg-[#002045] h-[145px] p-10 flex-col md:flex-row justify-between items-center border border-b-cyan-300">
          <div className="flex w-8/12 justify-between items-center mx-auto">
          <Link to="/" className="text-white text-2xl w-[217px] font-bold">
            <img src={logo} alt="logo" />
          </Link>
          <div className="block lg:hidden">
          <div className="flex gap-4 items-center justify-center">
            <Link to='/linekdin' className="text-blue-600 ">
            <FaLinkedin className="w-6 h-6"/>
            </Link>
            <Link to='/call' className="text-blue-600 ">
            <IoCall className="w-6 h-6"/>
            </Link>
            <Link to='/email' className="text-blue-600 ">
            <IoMdMail className="w-6 h-6"/>
            </Link>
          </div>
          </div>

          <div className="hidden lg:block">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          </div>

          </div>
        </div>

        {/* Copyright and Privacy */}
        <div className="flex bg-[#00152D] flex-col lg:flex-row justify-between items-center p-8">
        <div className="flex w-8/12 justify-between flex-col lg:flex-row items-center mx-auto">
        <div className="text-blue-400 text-sm">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </div>
          <Link
            to="/privacy"
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        </div>
      </div>
    </div>
  );
}
