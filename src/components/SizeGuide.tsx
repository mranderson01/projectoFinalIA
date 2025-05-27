import React, { useState } from 'react';
import { UserSquare as RulerSquare, Footprints, BookOpen } from 'lucide-react';

export const SizeGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chart' | 'measure' | 'tips'>('chart');

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Size Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding the right shoe size for growing feet is crucial for comfort and healthy development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-wrap">
            <button 
              className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                activeTab === 'chart' 
                  ? 'text-purple-600 border-purple-600' 
                  : 'text-gray-500 border-transparent hover:text-purple-500'
              }`}
              onClick={() => setActiveTab('chart')}
            >
              <RulerSquare className="mr-2" size={18} />
              Size Chart
            </button>
            <button 
              className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                activeTab === 'measure' 
                  ? 'text-purple-600 border-purple-600' 
                  : 'text-gray-500 border-transparent hover:text-purple-500'
              }`}
              onClick={() => setActiveTab('measure')}
            >
              <Footprints className="mr-2" size={18} />
              How to Measure
            </button>
            <button 
              className={`flex items-center px-6 py-4 font-medium border-b-2 ${
                activeTab === 'tips' 
                  ? 'text-purple-600 border-purple-600' 
                  : 'text-gray-500 border-transparent hover:text-purple-500'
              }`}
              onClick={() => setActiveTab('tips')}
            >
              <BookOpen className="mr-2" size={18} />
              Fitting Tips
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'chart' && <SizeChart />}
            {activeTab === 'measure' && <HowToMeasure />}
            {activeTab === 'tips' && <FittingTips />}
          </div>
        </div>
      </div>
    </section>
  );
};

const SizeChart: React.FC = () => (
  <div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left">Age (Approx.)</th>
            <th className="px-4 py-3 text-center">US Size</th>
            <th className="px-4 py-3 text-center">EU Size</th>
            <th className="px-4 py-3 text-center">UK Size</th>
            <th className="px-4 py-3 text-center">Foot Length (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium">2 years</td>
            <td className="px-4 py-3 text-center">6-7</td>
            <td className="px-4 py-3 text-center">22-23</td>
            <td className="px-4 py-3 text-center">5-6</td>
            <td className="px-4 py-3 text-center">13-14</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="px-4 py-3 font-medium">3 years</td>
            <td className="px-4 py-3 text-center">8-9</td>
            <td className="px-4 py-3 text-center">24-25</td>
            <td className="px-4 py-3 text-center">7-8</td>
            <td className="px-4 py-3 text-center">15-16</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium">4-5 years</td>
            <td className="px-4 py-3 text-center">10-11</td>
            <td className="px-4 py-3 text-center">26-28</td>
            <td className="px-4 py-3 text-center">9-10</td>
            <td className="px-4 py-3 text-center">16.5-18</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="px-4 py-3 font-medium">6-7 years</td>
            <td className="px-4 py-3 text-center">12-13</td>
            <td className="px-4 py-3 text-center">29-31</td>
            <td className="px-4 py-3 text-center">11-12</td>
            <td className="px-4 py-3 text-center">18.5-20</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-3 font-medium">8-9 years</td>
            <td className="px-4 py-3 text-center">1-2</td>
            <td className="px-4 py-3 text-center">32-34</td>
            <td className="px-4 py-3 text-center">13-1</td>
            <td className="px-4 py-3 text-center">20.5-22</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-3 font-medium">10 years</td>
            <td className="px-4 py-3 text-center">3-4</td>
            <td className="px-4 py-3 text-center">35-36</td>
            <td className="px-4 py-3 text-center">2-3</td>
            <td className="px-4 py-3 text-center">22.5-23.5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-4 text-sm text-gray-600">
      Note: This chart is a general guide. Children's feet grow at different rates, so measuring is always recommended.
    </p>
  </div>
);

const HowToMeasure: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-start">
      <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-bold mt-1 flex-shrink-0">1</div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800 mb-1">Gather Your Materials</h3>
        <p className="text-gray-600">
          You'll need a piece of paper, a pencil, and a ruler or measuring tape.
        </p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-bold mt-1 flex-shrink-0">2</div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800 mb-1">Prepare for Measuring</h3>
        <p className="text-gray-600">
          Have your child stand on the paper with their heel against a wall. Make sure they are standing straight with weight evenly distributed.
        </p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-bold mt-1 flex-shrink-0">3</div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800 mb-1">Mark the Measurements</h3>
        <p className="text-gray-600">
          Mark the tip of the longest toe and the back of the heel. Measure the distance between these marks in centimeters.
        </p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-bold mt-1 flex-shrink-0">4</div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800 mb-1">Add Room for Growth</h3>
        <p className="text-gray-600">
          Add 0.5-1 cm to allow room for growth and movement. Use this measurement with our size chart to find the right size.
        </p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="bg-purple-100 rounded-full h-8 w-8 flex items-center justify-center text-purple-600 font-bold mt-1 flex-shrink-0">5</div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800 mb-1">Measure Both Feet</h3>
        <p className="text-gray-600">
          Children often have slightly different sized feet. Always go with the measurement of the larger foot.
        </p>
      </div>
    </div>
  </div>
);

const FittingTips: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Best Time to Measure</h3>
      <p className="text-gray-600">
        Measure feet in the afternoon or evening, as feet tend to swell throughout the day.
      </p>
    </div>
    
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Check for Growth Regularly</h3>
      <p className="text-gray-600">
        Children's feet grow quickly! For ages 2-3, check every 3-4 months. For ages 4-10, check every 4-6 months.
      </p>
    </div>
    
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">The Thumb Rule</h3>
      <p className="text-gray-600">
        There should be about a thumb's width (0.5-1 cm) of space between the longest toe and the front of the shoe.
      </p>
    </div>
    
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Watch for Signs of Outgrowing</h3>
      <p className="text-gray-600">
        Red marks on feet, blisters, or complaints about foot pain can indicate shoes are too small.
      </p>
    </div>
    
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">Consider Width Too</h3>
      <p className="text-gray-600">
        Children's feet can vary in width as well as length. Look for shoes that come in different width options if needed.
      </p>
    </div>
  </div>
);