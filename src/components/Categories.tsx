import React from 'react';
import { categories } from '../data/categories';

export const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect shoes for every occasion, from playground adventures to special events.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  id: number;
  name: string;
  imageUrl: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl, color }) => {
  // Map of color classes
  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-500 hover:bg-purple-600',
    pink: 'bg-pink-500 hover:bg-pink-600',
    teal: 'bg-teal-500 hover:bg-teal-600',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    green: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <a 
      href="#" 
      className={`block rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${colorClasses[color] || 'bg-purple-500 hover:bg-purple-600'}`}
    >
      <div className="pt-4 px-4 flex justify-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-32 object-contain mix-blend-multiply" 
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="font-medium text-gray-800">{name}</h3>
      </div>
    </a>
  );
};