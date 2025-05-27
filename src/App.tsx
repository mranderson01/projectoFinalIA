import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Categories } from './components/Categories';
import { SizeGuide } from './components/SizeGuide';
import { SpecialCollections } from './components/SpecialCollections';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <SpecialCollections />
        <SizeGuide />
      </main>
      <Footer />
    </div>
  );
}

export default App;