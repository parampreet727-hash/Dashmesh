import React from 'react';

const AgricultureSpares = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Agriculture Spares
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Durable and reliable replacement parts for agricultural machinery.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-100 h-64 md:h-96 rounded-2xl flex items-center justify-center">
          <p className="text-slate-400 font-medium">[Image Placeholder]</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Built to Last</h3>
          <p className="text-slate-600 mb-6">
            We manufacture a wide range of high-quality spare parts for tractors, combine harvesters, and other agricultural equipment. Our components are designed to withstand the tough conditions of farming operations, minimizing downtime and maximizing productivity.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">OEM quality standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">Durable materials for extended wear life</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">Custom part manufacturing available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgricultureSpares;

