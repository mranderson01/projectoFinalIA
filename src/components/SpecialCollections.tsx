import React from 'react';
import { collections } from '../data/collections';

export const SpecialCollections: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specially curated shoe collections for every season and occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CollectionCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  bgColor: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  bgColor 
}) => {
  // Map of color classes
  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-100',
    pink: 'bg-pink-100',
    teal: 'bg-teal-100',
    yellow: 'bg-yellow-100',
  };

  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${colorClasses[bgColor] || 'bg-purple-100'}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="inline-block px-6 py-2 bg-white text-purple-600 font-medium rounded-full border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};