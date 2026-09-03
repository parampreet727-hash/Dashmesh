import React from 'react';

const CncTurning = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
          Job Works
        </span>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          CNC Turning Center
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Precision machining solutions for complex components.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Precision Machining Capabilities</h3>
          <p className="text-slate-600 mb-6">
            Our CNC turning centers are equipped with the latest technology to deliver high-quality machined components with tight tolerances. From simple cylindrical parts to complex geometries, our experienced operators ensure each piece meets exact specifications.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-slate-700 mr-2">✓</span>
              <span className="text-slate-700">High accuracy and repeatability</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-700 mr-2">✓</span>
              <span className="text-slate-700">Wide range of materials (Steel, Aluminum, Brass, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-700 mr-2">✓</span>
              <span className="text-slate-700">Scalable from prototyping to mass production</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 h-64 md:h-96 rounded-2xl flex items-center justify-center order-first md:order-last">
          <p className="text-slate-400 font-medium">[Image Placeholder]</p>
        </div>
      </div>
    </div>
  );
};

export default CncTurning;

