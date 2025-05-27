import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-4 text-gray-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="text-2xl font-bold text-purple-600">
              LittleSteps
            </a>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <NavLink href="#">Girls</NavLink>
            <NavLink href="#">Boys</NavLink>
            <NavLink href="#">Toddlers (2-5)</NavLink>
            <NavLink href="#">Kids (6-10)</NavLink>
            <NavLink href="#">Collections</NavLink>
            <NavLink href="#">Sale</NavLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="text-2xl font-bold text-purple-600">
                LittleSteps
              </a>
              <button 
                className="text-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <MobileNavLink href="#">Girls</MobileNavLink>
              <MobileNavLink href="#">Boys</MobileNavLink>
              <MobileNavLink href="#">Toddlers (2-5)</MobileNavLink>
              <MobileNavLink href="#">Kids (6-10)</MobileNavLink>
              <MobileNavLink href="#">Collections</MobileNavLink>
              <MobileNavLink href="#">Sale</MobileNavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-800 hover:text-purple-600 font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-xl text-gray-800 font-medium block"
  >
    {children}
  </a>
);