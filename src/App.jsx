import React, { useState } from 'react';
import PremiumNavbar from './components/PremiumNavbar.jsx';
import Hero from './components/Hero.jsx';
import AvailabilityCalendar from './components/AvailabilityCalendar.jsx';
import Gallery from './components/Gallery.jsx';
import FacilitiesAndPrice from './components/FacilitiesAndPrice.jsx';
import Contact from './components/Contact.jsx';
import LoginModal from './components/LoginModal.jsx';
import { motion } from 'framer-motion';

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 text-slate-800">
      <PremiumNavbar onOpenLogin={() => setLoginOpen(true)} />

      <Hero onOpenLogin={() => setLoginOpen(true)} />

      {/* Section: Highlights */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Lokasi Strategis', desc: 'Dekat kampus, perkantoran, dan transportasi umum.' },
              { title: 'Fasilitas Premium', desc: 'AC, Wi-Fi cepat, water heater, area bersama nyaman.' },
              { title: 'Proses Mudah', desc: 'Cek ketersediaan, hubungi, dan booking dengan cepat.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-bold text-blue-800">{item.title}</div>
                <div className="text-blue-900/80 mt-1">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeri" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-800 mb-4"
        >
          Galeri Kamar
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-900/80 mb-6"
        >
          Suasana kamar, kamar mandi, dan area bersama.
        </motion.p>
        <Gallery />
      </section>

      {/* Facilities and Price */}
      <section id="fasilitas" className="relative">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-100/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <FacilitiesAndPrice />
        </div>
      </section>

      {/* Availability Calendar */}
      <section id="ketersediaan" className="max-w-6xl mx-auto px-4 py-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-800 mb-4"
        >
          Ketersediaan Kamar
        </motion.h3>
        <p className="text-blue-900/80 mb-6">Tanggal berwarna biru menandakan kamar sudah dipesan.</p>
        <AvailabilityCalendar />
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-gradient-to-t from-blue-100/70 to-blue-50 border-t border-blue-100/60">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-blue-900/70 py-8">
        © {new Date().getFullYear()} Kos Nyaman Biru. Semua hak dilindungi.
      </footer>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
