import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100 to-pink-100 z-0"></div>
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-300 rounded-full opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-teal-300 rounded-full opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Happy Feet for 
              <span className="text-purple-600"> Little</span> 
              <span className="text-pink-500"> Adventurers</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Colorful, comfortable, and durable shoes designed especially for growing feet. 
              Let your children express themselves while exploring the world!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
                Shop Girls
              </button>
              <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
                Shop Boys
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <img 
              src="https://images.pexels.com/photos/6394547/pexels-photo-6394547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Happy children wearing colorful shoes" 
              className="rounded-lg shadow-2xl w-full max-w-lg object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs transform rotate-3 hidden md:block">
              <p className="text-purple-600 font-semibold">Free shipping on orders over $50!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};