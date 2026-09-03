import React from 'react';

const PlasmaCutting = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-700">
          Job Works
        </span>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Plasma Sheet Cutting
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          High-precision metal cutting solutions for a variety of industrial applications.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-100 h-64 md:h-96 rounded-2xl flex items-center justify-center">
          <p className="text-slate-400 font-medium">[Image Placeholder]</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Accurate & Clean Metal Cutting</h3>
          <p className="text-slate-600 mb-6">
            We utilize advanced plasma cutting technology to provide highly accurate and efficient cutting of metal sheets. Our state-of-the-art equipment ensures clean edges, minimal material waste, and fast turnaround times, making it ideal for both custom projects and high-volume production.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">High precision cutting up to thick plates</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">Quick turnaround times</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 mr-2">✓</span>
              <span className="text-slate-700">Cost-effective for large scale manufacturing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlasmaCutting;

