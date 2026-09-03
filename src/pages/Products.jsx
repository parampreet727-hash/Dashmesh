import React from 'react';

const Products = () => {
  const products = [
    { name: "Laser Cutting Parts", category: "Fabrication", description: "Precision cut metal parts for various heavy industries and construction." },
    { name: "Machined Components", category: "CNC", description: "High tolerance CNC turned and milled parts made to exact specifications." },
    { name: "Tractor Spares", category: "Agriculture", description: "Heavy-duty replacement parts for agricultural tractors and combine harvesters." },
    { name: "Custom Fabrications", category: "Custom", description: "Welded and assembled metal structures designed for unique requirements." },
    { name: "Hydraulic Fittings", category: "CNC", description: "Leak-proof hydraulic adapters and fittings for high-pressure applications." },
    { name: "Rotavator Blades", category: "Agriculture", description: "Wear-resistant boron steel blades for efficient soil preparation." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-700 mb-4">
            Our Catalog
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Premium Products
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our extensive range of manufactured components and industrial solutions, built to exact standards for lasting performance.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200/50 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 w-12 h-12 bg-red-700 text-white rounded-xl shadow-lg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">{product.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
