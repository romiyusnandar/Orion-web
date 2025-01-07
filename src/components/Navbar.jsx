"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbDownload } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cyan-50 bg-opacity-90 shadow-sm z-10">
      <div className="max-w-full mx-auto md:px-4 lg:px-12 py-1">
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Image src="/orion-lg.png" width={50} height={50} alt="Orion Logo" />
            <span className="hidden md:block font-bold text-xl">Orion<span className="text-cyan-600">OS.</span></span>
          </Link>
          <div className="hidden md:flex space-x-7 font-semibold items-center">
            <NavLink href="/team">Team</NavLink>
            <NavLink href="/source">Source</NavLink>
            <NavLink href="/device">
              <button className="bg-cyan-600 text-white px-4 py-3 hover:bg-cyan-700 transition-all duration-300 rounded-md flex justify-center items-center cursor-pointer">
                <span className="mr-2">Download</span>
                <TbDownload size={22} />
              </button>
            </NavLink>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-950 hover:text-cyan-700 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-6 h-6">
              <FiMenu size={24} className={`absolute transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <FiX size={24} className={`absolute transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="/team" mobile onClick={closeMenu}>Team</NavLink>
          <NavLink href="/source" mobile onClick={closeMenu}>Source</NavLink>
          <NavLink href="/device" mobile onClick={closeMenu}>
            <button className="w-full text-left bg-cyan-600 text-white px-4 py-2 hover:bg-cyan-700 transition-all duration-300 rounded-md flex justify-center items-center cursor-pointer">
              <span className="mr-2">Download</span>
              <TbDownload size={22} />
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children, mobile, onClick }) => (
  <Link
    href={href}
    className={`${
      mobile
        ? "block px-3 py-2 text-base font-medium text-slate-950 hover:text-cyan-700"
        : "text-md text-slate-950 hover:text-cyan-700"
    } transition-colors`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;