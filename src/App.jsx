import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './About'
import PlasmaCutting from './pages/PlasmaCutting'
import CncTurning from './pages/CncTurning'
import AgricultureSpares from './pages/AgricultureSpares'
import Products from './pages/Products'
import Contact from './pages/Contact'

function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-20 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-red-700">404</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
        <a href="/" className="mt-7 inline-flex rounded-lg bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800">
          Back to Home
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plasma-sheet-cutting" element={<PlasmaCutting />} />
          <Route path="/cnc-turning" element={<CncTurning />} />
          <Route path="/agriculture-spares" element={<AgricultureSpares />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
