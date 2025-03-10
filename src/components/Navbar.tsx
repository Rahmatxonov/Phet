import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen, GraduationCap } from 'lucide-react';
import logo from '../images/logos-Photoroom.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg p-3 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-10 w-10" alt="logo" />
            <span className="text-xl font-bold">PhysicsLab</span>
          </Link>

          {/* Hamburger icon (faqat mobil ekranlar uchun) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Menyu (desktop uchun) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-blue-200 transition"
            >
              <Home className="h-5 w-5" />
              <span>Asosiy</span>
            </Link>
            <Link
              to="/simulation"
              className="flex items-center space-x-1 hover:text-blue-200 transition"
            >
              <BookOpen className="h-5 w-5" />
              <span>Simulyatsiyalar</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-1 hover:text-blue-200 transition"
            >
              <GraduationCap className="h-5 w-5" />
              <span>O'quv Resurslar</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobil menyu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-700">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="flex items-center space-x-1 px-4 py-2 hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Asosiy</span>
            </Link>
            <Link
              to="/simulation"
              className="flex items-center space-x-1 px-4 py-2 hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Simulyatsiyalar</span>
            </Link>
            <Link
              to="#"
              className="flex items-center space-x-1 px-4 py-2 hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              <GraduationCap className="h-5 w-5" />
              <span>O'quv Resurslar</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
