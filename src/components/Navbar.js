"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Briefcase, User, LogOut, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check for logged in user
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();
    // Listen for storage changes (for login/logout in other tabs)
    window.addEventListener('storage', checkUser);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkUser);
    };
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsOpen(false);
    setShowDropdown(false);
    router.push('/login');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-brand-600 text-white p-2.5 rounded-2xl group-hover:bg-brand-500 transition-all duration-300 shadow-lg shadow-brand-500/20 rotate-3 group-hover:rotate-0">
              <Briefcase size={22} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 tracking-tighter">
              SkillBridge<span className="text-brand-600">Naija</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link href="/jobs" className={`text-sm font-black uppercase tracking-widest transition-colors ${pathname === '/jobs' ? 'text-brand-600' : 'text-gray-500 hover:text-gray-900'}`}>Find Jobs</Link>
            
            {user ? (
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className={`text-sm font-black uppercase tracking-widest transition-colors ${pathname === '/dashboard' ? 'text-brand-600' : 'text-gray-500 hover:text-gray-900'}`}>Dashboard</Link>
                <div className="relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95"
                  >
                    <User size={18} />
                    {user.name.split(' ')[0]}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-50 mb-1">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Signed in as</p>
                          <p className="text-sm font-black text-gray-900 truncate tracking-tight">{user.email}</p>
                        </div>
                        <Link href="/dashboard" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                          <User size={18} className="text-gray-400" /> My Profile
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <LogOut size={18} className="text-red-400" /> Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <Link href="/login" className="text-sm font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">Sign In</Link>
                <Link href="/register" className="bg-brand-600 hover:bg-brand-700 text-white px-7 py-3 rounded-2xl font-black text-sm transition-all hover:shadow-2xl hover:shadow-brand-500/30 transform hover:-translate-y-1 active:scale-95">
                  Join Free
                </Link>
              </div>
            )}
          </div>

          <button className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-xl transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full overflow-hidden border-b border-gray-100 shadow-2xl"
          >
            <div className="flex flex-col px-4 pt-4 pb-10 gap-2 bg-white/95 backdrop-blur-md">
              <Link href="/jobs" className="text-lg font-bold text-gray-900 p-4 hover:bg-gray-50 rounded-2xl transition-all" onClick={() => setIsOpen(false)}>Find Jobs</Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="text-lg font-bold text-gray-900 p-4 hover:bg-gray-50 rounded-2xl transition-all" onClick={() => setIsOpen(false)}>Dashboard</Link>
                  <button onClick={handleLogout} className="text-lg font-bold text-red-500 p-4 hover:bg-red-50 rounded-2xl text-left transition-all flex items-center gap-3">
                    <LogOut size={20} /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-lg font-bold text-gray-900 p-4 hover:bg-gray-50 rounded-2xl transition-all" onClick={() => setIsOpen(false)}>Sign In</Link>
                  <Link href="/register" className="bg-brand-600 text-white rounded-2xl p-5 font-black text-center shadow-xl shadow-brand-500/20 active:scale-95" onClick={() => setIsOpen(false)}>Get Started for Free</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
