import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-19 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Dashmesh Industry home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-red-700 to-red-900 shadow-md shadow-red-900/20 transition-transform duration-200 group-hover:scale-105">
              <span className="text-xl font-black text-white">D</span>
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                Dashmesh Industry
              </h1>
              <p className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
                Quality • Precision • Reliability
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              to="/"
              className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
            >
              About Us
            </Link>

            {/* Job Works Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
                aria-haspopup="true"
              >
                Job Works
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                  <Link
                    to="/plasma-sheet-cutting"
                    className="group/item flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-red-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700 transition-colors group-hover/item:bg-red-700 group-hover/item:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Plasma Sheet Cutting
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Accurate & clean metal cutting
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/cnc-turning"
                    className="group/item flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-red-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover/item:bg-red-700 group-hover/item:text-white">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="8" strokeWidth={1.8} />
                        <circle cx="12" cy="12" r="2" strokeWidth={1.8} />
                        <path
                          strokeLinecap="round"
                          strokeWidth={1.8}
                          d="M4 12h3M17 12h3"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        CNC Turning Center
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Precision machining solutions
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/agriculture-spares"
              className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
            >
              Agriculture Spares
            </Link>

            <Link
              to="/products"
              className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-red-700"
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-700/20 transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg hover:shadow-red-700/25"
            >
              Get a Quote
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-200 p-2.5 text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-162.5 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 pt-3">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                About Us
              </Link>

              {/* Mobile Job Works */}
              <div className="mt-2 rounded-xl bg-slate-50 p-2">
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-red-700">
                  Job Works
                </div>

                <Link
                  to="/plasma-sheet-cutting"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-red-700"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-red-600" />
                  Plasma Sheet Cutting
                </Link>

                <Link
                  to="/cnc-turning"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-red-700"
                >
                  <span className="mr-3 h-2 w-2 rounded-full bg-red-600" />
                  CNC Turning Center
                </Link>
              </div>

              <Link
                to="/agriculture-spares"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                Agriculture Spares
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                Products
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-50 hover:text-red-700"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-red-700 px-5 py-3.5 font-bold text-white shadow-md shadow-red-700/20 transition hover:bg-red-800"
              >
                Get a Quote
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
