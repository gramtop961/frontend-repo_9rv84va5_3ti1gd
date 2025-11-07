import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenLogin }) {
  return (
    <section className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient and glass overlay (non-blocking pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/40 via-blue-100/30 to-blue-50/80" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl backdrop-blur-sm bg-white/40 border border-white/60 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(30,64,175,0.35)]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight text-blue-900"
          >
            Hunian Modern, Nyaman, dan Elegan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-3 md:mt-4 text-blue-900/80 text-base md:text-lg"
          >
            Nuansa biru yang menenangkan, fasilitas premium, dan proses booking yang mudah. 
            Cek ketersediaan dan pesan kapan saja.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a href="#ketersediaan" className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
              Cek Ketersediaan
            </a>
            <button onClick={onOpenLogin} className="px-5 py-2.5 rounded-xl bg-white/70 text-blue-800 font-semibold border border-blue-200/60 hover:bg-white transition-colors">
              Masuk & Simpan Favorit
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
