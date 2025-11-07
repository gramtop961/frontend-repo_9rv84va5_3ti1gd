import React from 'react';
import AvailabilityCalendar from './components/AvailabilityCalendar.jsx';
import Gallery from './components/Gallery.jsx';
import FacilitiesAndPrice from './components/FacilitiesAndPrice.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-slate-800">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-100 to-blue-50 sticky top-0 z-10 border-b border-blue-100/70">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center font-semibold">K</div>
            <div>
              <h1 className="text-xl font-bold text-blue-700">Kos Nyaman Biru</h1>
              <p className="text-sm text-blue-900/70 -mt-0.5">Sewa kamar harian / bulanan</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-900/80">
            <a href="#galeri" className="hover:text-blue-700">Galeri</a>
            <a href="#fasilitas" className="hover:text-blue-700">Fasilitas & Harga</a>
            <a href="#ketersediaan" className="hover:text-blue-700">Ketersediaan</a>
            <a href="#kontak" className="hover:text-blue-700">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-100/60 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
              Temukan kamar nyaman dengan nuansa biru yang menenangkan
            </h2>
            <p className="mt-3 text-blue-900/80">
              Lokasi strategis, fasilitas lengkap, cocok untuk mahasiswa maupun pekerja. Cek
              kalender ketersediaan dan hubungi kami untuk booking.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#ketersediaan" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
                Cek Ketersediaan
              </a>
              <a href="#kontak" className="px-5 py-2.5 rounded-lg bg-white text-blue-700 font-medium border border-blue-200 hover:bg-blue-50">
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4">
            <Gallery compact />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeri" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Galeri Kamar</h3>
        <p className="text-blue-900/80 mb-6">Sekilas suasana kamar, kamar mandi, dan area bersama.</p>
        <Gallery />
      </section>

      {/* Facilities and Price */}
      <section id="fasilitas" className="bg-white border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <FacilitiesAndPrice />
        </div>
      </section>

      {/* Availability Calendar */}
      <section id="ketersediaan" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Ketersediaan Kamar</h3>
        <p className="text-blue-900/80 mb-6">Tanggal berwarna biru menandakan kamar sudah dipesan.</p>
        <AvailabilityCalendar />
      </section>

      {/* Contact */}
      <section id="kontak" className="bg-gradient-to-t from-blue-100/70 to-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-blue-900/70 py-8">
        © {new Date().getFullYear()} Kos Nyaman Biru. Semua hak dilindungi.
      </footer>
    </div>
  );
}
