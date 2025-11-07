import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, ThermometerSun, BedDouble, ShowerHead, ShieldCheck, Car, Utensils, Lamp } from 'lucide-react';

const fasilitas = [
  { icon: BedDouble, label: 'Kasur Queen & Sprei' },
  { icon: ThermometerSun, label: 'AC Hemat Energi' },
  { icon: ShowerHead, label: 'K. Mandi Dalam + Water Heater' },
  { icon: Wifi, label: 'Wi‑Fi 100 Mbps' },
  { icon: Utensils, label: 'Dapur Bersama' },
  { icon: Lamp, label: 'Area Belajar Nyaman' },
  { icon: Car, label: 'Parkir Motor' },
  { icon: ShieldCheck, label: 'CCTV 24 Jam' },
];

export default function FacilitiesAndPrice() {
  return (
    <div className="rounded-3xl border border-blue-100/80 bg-white/70 backdrop-blur p-6 md:p-8 shadow-[0_10px_40px_-20px_rgba(30,64,175,0.25)]">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <motion.h4
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-extrabold text-blue-900 mb-4"
          >
            Fasilitas
          </motion.h4>
          <div className="grid grid-cols-2 gap-3">
            {fasilitas.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.03 * i }}
                className="flex items-center gap-3 p-3 rounded-xl border border-blue-100 bg-blue-50/40"
              >
                <f.icon size={18} className="text-blue-700" />
                <span className="text-blue-900/90 text-sm md:text-base">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h4
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-extrabold text-blue-900 mb-4"
          >
            Harga
          </motion.h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/90 to-white"
            >
              <div className="font-semibold text-blue-800">Harian</div>
              <div className="text-3xl font-black text-blue-700">Rp 250.000</div>
              <div className="text-sm text-blue-900/70">Per malam, termasuk listrik dan Wi‑Fi</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="p-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-white"
            >
              <div className="font-semibold text-blue-800">Bulanan</div>
              <div className="text-3xl font-black text-blue-700">Rp 3.000.000</div>
              <div className="text-sm text-blue-900/70">Minimal 1 bulan, deposit 1/2 bulan</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm text-blue-900/70"
          >
            Catatan: Harga dapat berubah sewaktu-waktu. Hubungi kami untuk promo dan ketersediaan terbaru.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
