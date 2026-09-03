import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-700">
            About Dashmesh Industry
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Precision Engineering.
            <span className="block text-red-700">
              Reliable Manufacturing.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Dashmesh Industry is committed to delivering dependable
            manufacturing and engineering solutions with a strong focus on
            quality, precision, and customer satisfaction.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-red-100 sm:-left-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-slate-950/80" />

              <div className="flex min-h-95 items-center justify-center p-10 sm:min-h-112.5">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-red-700 shadow-xl shadow-red-950/40">
                    <span className="text-5xl font-black text-white">D</span>
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-white">
                    Dashmesh Industry
                  </h3>

                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                    Quality • Precision • Reliability
                  </p>

                  <div className="mx-auto mt-8 h-px w-24 bg-red-600" />

                  <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-slate-300">
                    Engineering solutions built with attention to detail,
                    consistent quality, and a commitment to getting the job
                    done right.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:-right-6">
              <p className="text-3xl font-black text-red-700">100%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                Quality Focused
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Built for precision, trusted for performance.
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              At Dashmesh Industry, we provide practical manufacturing
              solutions for businesses that demand accuracy and dependable
              results. Our capabilities include plasma sheet cutting, CNC
              turning, agriculture spare parts, and other precision
              engineering requirements.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              We combine modern machining capabilities with careful
              workmanship and quality control to produce components that meet
              customer requirements and perform reliably in demanding
              applications.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-red-50/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-700">
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
                      d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  Quality First
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Consistent attention to quality throughout the manufacturing
                  process.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-red-50/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      strokeWidth={1.8}
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      strokeWidth={1.8}
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth={1.8}
                      d="M4 12h3M17 12h3"
                    />
                  </svg>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  Precision Work
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Accurate cutting and machining for reliable component
                  performance.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-red-50/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-700">
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
                      d="M12 6v6l4 2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      strokeWidth={1.8}
                    />
                  </svg>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  On-Time Delivery
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Focused processes to deliver work according to agreed
                  requirements and timelines.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-red-200 hover:bg-red-50/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-100 text-red-700">
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
                      d="M17 20a4 4 0 00-8 0M13 4a3 3 0 110 6 3 3 0 010-6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19 8a2.5 2.5 0 010 5M5 8a2.5 2.5 0 000 5"
                    />
                  </svg>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  Customer Focus
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  We work closely with customers to understand their exact
                  manufacturing needs.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-6 py-3 font-bold text-white shadow-md shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg"
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

              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid overflow-hidden rounded-2xl bg-slate-900 sm:grid-cols-3">
          <div className="border-b border-slate-700 p-8 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-black text-white">Precision</p>
            <p className="mt-2 text-sm text-slate-400">
              Accurate engineering solutions
            </p>
          </div>

          <div className="border-b border-slate-700 p-8 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-black text-white">Reliable</p>
            <p className="mt-2 text-sm text-slate-400">
              Consistent manufacturing quality
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-3xl font-black text-white">Professional</p>
            <p className="mt-2 text-sm text-slate-400">
              Customer-focused service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;