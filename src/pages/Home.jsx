import React from "react";
import { Link } from "react-router-dom";
import Silder from "../component/Silder";
import About from "../About";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-red-900/40 via-slate-900 to-slate-950/90 z-0"></div>

        {/* Abstract Background Patterns */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-red-700/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-96 w-96 rounded-full bg-red-900/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center reveal-on-scroll">
          <span className="inline-flex items-center rounded-full bg-red-500/10 border border-red-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400 mb-6">
            Leading Engineering Solutions
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Precision Manufacturing <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600">
              Built to Last.
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
            We deliver top-tier metal cutting, CNC turning, and agricultural
            spares with uncompromising quality and reliability for industries
            worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center rounded-lg bg-red-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-900/50 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-red-700/50"
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto text-center rounded-lg bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive industrial services under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <Link
              to="/plasma-sheet-cutting"
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 reveal-on-scroll"
            >
              <div className="h-14 w-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                Plasma Cutting
              </h3>
              <p className="text-slate-600 leading-relaxed">
                High-precision metal sheet cutting for all your structural and
                fabrication needs.
              </p>
            </Link>

            <Link
              to="/cnc-turning"
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 reveal-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              <div className="h-14 w-14 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="8" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                CNC Turning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Advanced machining centers delivering unmatched accuracy and
                repeatability.
              </p>
            </Link>

            <Link
              to="/agriculture-spares"
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-200 reveal-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              <div className="h-14 w-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                Agri Spares
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Durable replacement parts keeping your heavy agricultural
                machinery running optimally.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Silder />

      <div className="reveal-on-scroll">
        <About />
      </div>
    </main>
  );
};

export default Home;
