"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
              <Briefcase size={24} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
              SkillBridge Naija
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/jobs" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Find Jobs</Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">Login</Link>
              <Link href="/register" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-brand-500/30 transform hover:-translate-y-0.5">
                Join Now
              </Link>
            </div>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full border-b"
        >
          <div className="flex flex-col px-4 pt-2 pb-6 gap-4 bg-white/90">
            <Link href="/jobs" className="text-gray-700 font-medium p-2" onClick={() => setIsOpen(false)}>Find Jobs</Link>
            <hr className="border-gray-200" />
            <Link href="/login" className="text-gray-700 font-medium p-2" onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/register" className="bg-brand-600 text-white text-center rounded-lg p-3 font-medium cursor-pointer block" onClick={() => setIsOpen(false)}>Join Now</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
