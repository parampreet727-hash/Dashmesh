import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-[calc(100vh-80px)] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-red-50 blur-3xl opacity-60"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-700 mb-4">
            Get in touch
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Let's Start a Conversation
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or need a custom quote? Our team is ready to provide you with the best manufacturing solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8 reveal-on-scroll">
            <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 rounded-full bg-red-600 blur-3xl opacity-50"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-red-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Our Location</p>
                    <p className="text-lg text-slate-200">Industrial Area, City, State,<br/>India - 123456</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-red-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Call Us</p>
                    <p className="text-lg text-slate-200">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-red-600 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                    <p className="text-lg text-slate-200">info@dashmeshindustry.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" id="firstName" required className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:bg-white focus:border-red-500 focus:ring-red-500 transition-colors outline-none ring-1 ring-transparent focus:ring-1" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:bg-white focus:border-red-500 focus:ring-red-500 transition-colors outline-none ring-1 ring-transparent focus:ring-1" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" id="email" required className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:bg-white focus:border-red-500 focus:ring-red-500 transition-colors outline-none ring-1 ring-transparent focus:ring-1" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea id="message" required rows={5} className="block w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:bg-white focus:border-red-500 focus:ring-red-500 transition-colors outline-none ring-1 ring-transparent focus:ring-1 resize-none" placeholder="Tell us about your project or requirements..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className={`w-full rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                  submitted 
                    ? 'bg-emerald-600 shadow-emerald-600/30' 
                    : isSubmitting 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-red-700 shadow-red-700/30 hover:bg-red-800 hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
