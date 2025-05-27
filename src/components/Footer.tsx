import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LittleSteps</h3>
            <p className="text-gray-300 mb-4">
              Colorful, comfortable, and durable shoes designed for growing feet. Let your little ones express themselves!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Girls Shoes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Boys Shoes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Toddlers (2-5)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Kids (6-10)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Special Collections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Shoe Lane, Kidsville, KS 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">hello@littlesteps.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LittleSteps. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img src="https://i.imgur.com/ZN7WeZm.png" alt="Payment methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};