import React from 'react';

export default function FacilitiesAndPrice() {
  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold text-blue-800 mb-3">Fasilitas</h4>
          <ul className="space-y-2 text-blue-900/90">
            <li>• Kasur queen size + bantal & sprei</li>
            <li>• AC hemat energi</li>
            <li>• Meja belajar & kursi ergonomis</li>
            <li>• Lemari pakaian</li>
            <li>• Kamar mandi dalam dengan water heater</li>
            <li>• Wi‑Fi cepat</li>
            <li>• Area bersama: dapur & ruang santai</li>
            <li>• Parkir motor</li>
            <li>• Keamanan 24 jam + CCTV</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-blue-800 mb-3">Harga</h4>
          <div className="space-y-3 text-blue-900/90">
            <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
              <div className="font-semibold text-blue-800">Harian</div>
              <div className="text-2xl font-extrabold text-blue-700">Rp 250.000</div>
              <div className="text-sm text-blue-900/70">Per malam, sudah termasuk listrik dan Wi‑Fi</div>
            </div>
            <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
              <div className="font-semibold text-blue-800">Bulanan</div>
              <div className="text-2xl font-extrabold text-blue-700">Rp 3.000.000</div>
              <div className="text-sm text-blue-900/70">Minimal 1 bulan, deposit 1/2 bulan</div>
            </div>
            <div className="text-sm text-blue-900/70">
              Catatan: Harga dapat berubah sewaktu-waktu. Silakan hubungi kami untuk promo
              atau ketersediaan terbaru.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
