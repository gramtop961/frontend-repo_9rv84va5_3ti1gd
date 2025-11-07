import React, { useState } from 'react';

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
      return `Halo, saya ingin sewa kamar 1 bulan mulai ${form.tanggalMulai} hingga ${form.durasiBulan} bulan ke depan. Nama: ${form.nama}.`;
    }
    return 'Halo, saya tertarik dengan kamar ini.';
  };

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(templatePesan())}`;

  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
      <h4 className="text-xl font-bold text-blue-800 mb-1">Hubungi Kami</h4>
      <p className="text-blue-900/80 mb-6">Isi formulir di bawah ini untuk menanyakan ketersediaan atau melakukan pemesanan.</p>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Nama Lengkap</label>
          <input name="nama" value={form.nama} onChange={handleChange} required className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Nama Anda" />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="email@contoh.com" />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">No. Telepon</label>
          <input name="telepon" value={form.telepon} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="08xxxxxxxxxx" />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm text-blue-900/80 mb-1">Tipe Pemesanan</label>
          <select name="tipe" value={form.tipe} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option value="tanggal">Tanggal spesifik</option>
            <option value="bulanan">Sewa bulanan</option>
          </select>
        </div>

        {form.tipe === 'tanggal' && (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Tanggal Mulai</label>
              <input type="date" name="tanggalMulai" value={form.tanggalMulai} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Tanggal Selesai</label>
              <input type="date" name="tanggalSelesai" value={form.tanggalSelesai} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
          </>
        )}

        {form.tipe === 'bulanan' && (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Mulai Tanggal</label>
              <input type="date" name="tanggalMulai" value={form.tanggalMulai} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-blue-900/80 mb-1">Durasi (bulan)</label>
              <input type="number" min="1" name="durasiBulan" value={form.durasiBulan} onChange={handleChange} className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
          </>
        )}

        <div className="md:col-span-2 flex flex-wrap items-center gap-3 mt-2">
          <button type="submit" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Buat Pesan</button>
          <a href={waLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">Kirim via WhatsApp</a>
          <span className="text-sm text-blue-900/70">Nomor WA contoh: 0812-3456-7890</span>
        </div>
      </form>

      {submitted && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="text-sm text-blue-900/70 mb-1">Pratinjau pesan:</div>
          <div className="font-medium text-blue-800">{templatePesan()}</div>
        </div>
      )}
    </div>
  );
}
