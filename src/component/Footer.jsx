import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Dashmesh Industry</h3>
            <p className="text-sm">
              Quality • Precision • Reliability. Leading provider of engineering and manufacturing solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link to="/products" className="hover:text-red-500 transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/plasma-sheet-cutting" className="hover:text-red-500 transition">Plasma Sheet Cutting</Link></li>
              <li><Link to="/cnc-turning" className="hover:text-red-500 transition">CNC Turning</Link></li>
              <li><Link to="/agriculture-spares" className="hover:text-red-500 transition">Agriculture Spares</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@dashmeshindustry.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Address: Industrial Area, City, State, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dashmesh Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

