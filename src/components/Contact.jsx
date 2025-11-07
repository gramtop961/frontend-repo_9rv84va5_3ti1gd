import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Mail, User, CalendarClock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', telepon: '', tipe: 'tanggal', tanggalMulai: '', tanggalSelesai: '', durasiBulan: 1 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const templatePesan = () => {
    if (form.tipe === 'tanggal' && form.tanggalMulai && form.tanggalSelesai) {
      return `Halo, saya ingin memesan kamar dari ${form.tanggalMulai} sampai ${form.tanggalSelesai}. Nama: ${form.nama}.`;
    }
    if (form.tipe === 'bulanan' && form.tanggalMulai && form.durasiBulan) {
      return `Halo, saya ingin sewa kamar ${form.durasiBulan} bulan mulai ${form.tanggalMulai}. Nama: ${form.nama}.`;
    }
    return 'Halo, saya tertarik dengan kamar ini.';
  };

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(templatePesan())}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-blue-100/80 bg-white/70 backdrop-blur p-6 md:p-8 shadow-[0_10px_40px_-20px_rgba(30,64,175,0.25)]"
    >
      <div className="mb-6">
        <h4 className="text-xl md:text-2xl font-extrabold text-blue-900">Hubungi Kami</h4>
        <p className="text-blue-900/80 mt-1">Isi formulir untuk menanyakan ketersediaan atau melakukan pemesanan.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Nama Lengkap</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-3 text-blue-900/60" />
            <input name="nama" value={form.nama} onChange={handleChange} required className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Nama Anda" />
          </div>
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-3 text-blue-900/60" />
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="email@contoh.com" />
          </div>
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">No. Telepon</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-3 text-blue-900/60" />
            <input name="telepon" value={form.telepon} onChange={handleChange} className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="08xxxxxxxxxx" />
          </div>
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Tipe Pemesanan</label>
          <select name="tipe" value={form.tipe} onChange={handleChange} className="w-full border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option value="tanggal">Tanggal spesifik</option>
            <option value="bulanan">Sewa bulanan</option>
          </select>
        </div>

        {form.tipe === 'tanggal' && (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Tanggal Mulai</label>
              <div className="relative">
                <CalendarClock size={16} className="absolute left-3 top-3 text-blue-900/60" />
                <input type="date" name="tanggalMulai" value={form.tanggalMulai} onChange={handleChange} className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Tanggal Selesai</label>
              <div className="relative">
                <CalendarClock size={16} className="absolute left-3 top-3 text-blue-900/60" />
                <input type="date" name="tanggalSelesai" value={form.tanggalSelesai} onChange={handleChange} className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
          </>
        )}

        {form.tipe === 'bulanan' && (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Mulai Tanggal</label>
              <div className="relative">
                <CalendarClock size={16} className="absolute left-3 top-3 text-blue-900/60" />
                <input type="date" name="tanggalMulai" value={form.tanggalMulai} onChange={handleChange} className="w-full pl-10 border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Durasi (bulan)</label>
              <input type="number" min="1" name="durasiBulan" value={form.durasiBulan} onChange={handleChange} className="w-full border border-blue-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
          </>
        )}

        <div className="md:col-span-2 flex flex-wrap items-center gap-3 mt-2">
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow shadow-blue-600/30 hover:bg-blue-700"><Send size={16}/> Buat Pesan</button>
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700"><Phone size={16}/> Kirim via WhatsApp</a>
          <span className="text-sm text-blue-900/70">Nomor WA contoh: 0812-3456-7890</span>
        </div>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-blue-50/80 border border-blue-100 rounded-xl"
        >
          <div className="text-sm text-blue-900/70 mb-1">Pratinjau pesan:</div>
          <div className="font-medium text-blue-800">{templatePesan()}</div>
        </motion.div>
      )}
    </motion.div>
  );
}
