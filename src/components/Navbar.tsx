import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, BookOpen, GraduationCap, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="h-8 w-8" />
            <span className="text-xl font-bold">PhysicsLab</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <Home className="h-5 w-5" />
              <span>Asosiy</span>
            </Link>
            <Link to="/simulation" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <BookOpen className="h-5 w-5" />
              <span>Simulyatsiyalar</span>
            </Link>
            <Link to="#" className="flex items-center space-x-1 hover:text-blue-200 transition">
              <GraduationCap className="h-5 w-5" />
              <span>O'quv Resurslar</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;