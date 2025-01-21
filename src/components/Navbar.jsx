import React, { useState } from 'react';
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sticky py-4 bg-white shadow-md">

      <div className="flex items-center gap-2 flex-shrink-0">
        <a href="/">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </a>
        <a href="/" className="font-bold text-2xl text-blue-950">Wobb</a>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <a href="/" className="font-semibold text-base">Home</a>
        <a href="/features" className="font-semibold text-base">Features</a>
        <a href="/resources" className="font-semibold text-base">Resources</a>
        <a href="/pricing" className="font-semibold text-base">Pricing</a>
      </div>

      {/* Log in and Get Started (Desktop) */}
      <div className="hidden md:flex items-center">
        <a href="/login" className="font-semibold">Log in</a>
        <button className="px-5 py-2 bg-blue-500 rounded-lg text-white font-bold mx-4">
          Get Started<span className="font-normal"> - It's Free</span>
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden">
          <a href="/" className="block py-2 font-semibold text-base">Home</a>
          <a href="/features" className="block py-2 font-semibold text-base">Features</a>
          <a href="/resources" className="block py-2 font-semibold text-base">Resources</a>
          <a href="/pricing" className="block py-2 font-semibold text-base">Pricing</a>
          <hr className="my-2 w-full" />
          <a href="/login" className="block py-2 font-semibold">Log in</a>
          <button className="w-full px-5 py-2 bg-blue-500 rounded-lg text-white font-bold">
            Get Started<span className="font-normal"> - It's Free</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
