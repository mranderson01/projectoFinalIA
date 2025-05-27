import React, { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { ProductType } from '../types/product';

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'popular' | 'new' | 'sale'>('popular');
  
  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'popular':
        return products.filter(p => p.isPopular).slice(0, 4);
      case 'new':
        return products.filter(p => p.isNew).slice(0, 4);
      case 'sale':
        return products.filter(p => p.onSale).slice(0, 4);
      default:
        return products.slice(0, 4);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Shoes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of colorful, comfortable shoes designed especially for growing feet.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <TabButton 
                active={activeTab === 'popular'} 
                onClick={() => setActiveTab('popular')}
              >
                Popular
              </TabButton>
              <TabButton 
                active={activeTab === 'new'} 
                onClick={() => setActiveTab('new')}
              >
                New Arrivals
              </TabButton>
              <TabButton 
                active={activeTab === 'sale'} 
                onClick={() => setActiveTab('sale')}
              >
                On Sale
              </TabButton>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {getFilteredProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 focus:outline-none">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
      active 
        ? 'bg-purple-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-200'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-56 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      />
      {product.onSale && (
        <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          SALE
        </div>
      )}
      {product.isNew && (
        <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          NEW
        </div>
      )}
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex items-center">
          <Star size={16} className="text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-600 ml-1">{product.rating}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-3">{product.ageRange}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {product.onSale ? (
            <>
              <span className="text-lg font-bold text-pink-500">${product.salePrice}</span>
              <span className="text-sm text-gray-400 line-through ml-2">${product.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-800">${product.price}</span>
          )}
        </div>
        <button className="p-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  </div>
);